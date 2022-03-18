import Property from "../models/property.model.js";

export class PropertyController {
  static async register(req, res) {
    const {
      title,
      isActive,
      state,
      street,
      city,
      amountBedrooms,
      amountBathrooms,
      amountGarage,
      valueCondominium,
      iptu,
      valueRental,
      valueSell,
      isSelling,
      isRenting,
      role,
    } = req.body;

    if (
      !title ||
      !isActive ||
      !state ||
      !street ||
      !city ||
      !amountBedrooms ||
      !amountBathrooms ||
      !amountGarage ||
      !valueCondominium ||
      !iptu ||
      !valueRental ||
      !valueSell ||
      !isSelling ||
      !isRenting ||
      !role
    ) {
      res
        .status(422)
        .json({ status: 422, message: "Não foi possivel cadastrar o imóvel" });
    }

    const propertyExists = await Property.findOne({
      where: { id: id },
    });

    if (propertyExists) {
      return res.status(400).json({ message: "Imóvel já existe" });
    }

    const property = new Property({
      title: title,
      isActive: isActive,
      state: state,
      city: city,
      amountBedrooms: amountBedrooms,
      amountGarage: amountGarage,
      valueCondominium: valueCondominium,
      iptu: iptu,
      valueRental: valueRental,
      valueSell: valueSell,
      isSelling: isSelling,
      isRenting: isRenting,
      role: role,
    });

    try {
      await Property.create(property);
      return res.status(200).json({ message: "Anúncio de imóvel completado" });
    } catch (error) {
      return res.status(400).json({ message: `Deu erro ${error}` });
    }
  }

  static async getAllProperties(req, res) {
    try {
      const allProperties = await Property.findAll();
      return res.status(200).json(allProperties);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteById(req, res) {
    const id = req.params.id;

    const property = await Property.findOne({ where: { id: id } });

    if (!property) {
      return res.status(401).json({
        status: 401,
        message: "Imóvel não encontrado!",
      });
    }

    try {
      await Property.remove({ where: property });
      return res
        .status(200)
        .json({ status: 200, message: "Anúncio de imóvel deletado" });
    } catch (erro) {
      return res
        .status(401)
        .json({ status: 401, message: `Deu erro, tente novamente: ${erro}` });
    }
  }
}
