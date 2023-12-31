"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registersModel = exports.Registers = void 0;
const sequelize_1 = require("sequelize");
class Registers extends sequelize_1.Model {
}
exports.Registers = Registers;
function registersModel(sequelize) {
    Registers.init({
        registerNum: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userNum: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        personnel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        meeting: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        position: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        contact: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        period: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        content: {
            type: sequelize_1.DataTypes.STRING(2000),
            allowNull: false,
        },
        view: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0,
        },
        favorite: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0,
        },
        state: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        sequelize,
        modelName: "Registers",
        tableName: "registers",
        timestamps: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "registerNum" }],
            },
        ],
    });
    return Registers;
}
exports.registersModel = registersModel;
