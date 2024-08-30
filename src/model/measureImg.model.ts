import { DataTypes, Model } from "sequelize";
import { measureImg } from "../interface/measureImg";
import { sequelize } from "../config/database";

export class ImgRequest extends Model implements measureImg {
    public id!: string;
    public image!: string;
    public customer_code!: string;
    public measure_datetime!: string;
    public measure_type!: "Water" | "Gas";
}

ImgRequest.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    measure_datetime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    measure_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
        sequelize,
        tableName: 'measureimg'
})