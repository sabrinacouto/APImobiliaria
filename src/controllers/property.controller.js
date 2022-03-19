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
        .status(400)
        .json({ status: 400, message: "Não foi possivel cadastrar o imóvel" });
    }

    const propertyExists = await Property.findOne({});

    if (propertyExists) {
      return res.status(400).json({ message: "Imóvel já existe" });
    }

    const property = {
      title: title,
      isActive: isActive,
      state: state,
      street: street,
      city: city,
      amountBedrooms: amountBedrooms,
      amountBathrooms: amountBathrooms,
      amountGarage: amountGarage,
      valueCondominium: valueCondominium,
      iptu: iptu,
      valueRental: valueRental,
      valueSell: valueSell,
      isSelling: isSelling,
      isRenting: isRenting,
      role: role,
    };
    console.log({ property });

    try {
      await Property.create(property);
      return res.status(201).json({ message: "Imóvel anunciado" });
    } catch (error) {
      return res.status(400).json({ message: `Deu erro ${error}` });
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const property = await Property.findOne({
        where: {
          id: id,
        },
      });

      if (!property) {
        return res.status(400).json({
          status: 400,
          message: "Prato não encontrado!",
        });
      }

      return res.status(200).json({ property: property });
    } catch (erro) {
      return res.status(400).json({ message: `Deu erro: ${erro}` });
    }
  }

  static async getAllProperties(req, res) {
    try {
      const allProperties = await Property.findAll();
      return res.status(200).json(allProperties);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async deleteById(req, res) {
    const id = req.params.id;

    const property = await Property.findOne({ where: { id: id } });

    if (!property) {
      return res.status(400).json({
        status: 400,
        message: "Imóvel não encontrado!",
      });
    }

    try {
      await Property.destroy({ where: property });
      return res
        .status(200)
        .json({ status: 200, message: "Anúncio de imóvel deletado" });
    } catch (erro) {
      return res
        .status(400)
        .json({ status: 400, message: `Deu erro, tente novamente: ${erro}` });
    }
  }

  static async updateById(req, res) {
    const id = req.params.id;
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

    const property = await Property.findOne({ where: { id: id } });

    if (!property) {
      return res.status(400).json({
        status: 400,
        message: "Imóvel não foi encontrado",
      });
    }

    const newData = {
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
    };

    try {
      await Property.update(newData, { where: property });
      return res
        .status(200)
        .json({ status: 200, message: "O imóvel foi atualizado" });
    } catch (erro) {
      return res.status(400).json({ message: `Opa, deu erro!: ${erro}` });
    }
  }
}

export default PropertyController;
