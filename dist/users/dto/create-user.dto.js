"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDto = void 0;
const api_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-property.decorator");
class createUserDto {
}
__decorate([
    (0, api_property_decorator_1.ApiProperty)({ example: 'Vitaliy', description: 'first name' }),
    __metadata("design:type", String)
], createUserDto.prototype, "first_name", void 0);
__decorate([
    (0, api_property_decorator_1.ApiProperty)({ example: 'Havrona', description: 'second name' }),
    __metadata("design:type", String)
], createUserDto.prototype, "second_name", void 0);
__decorate([
    (0, api_property_decorator_1.ApiProperty)({ example: 'user@gmail.com', description: 'email' }),
    __metadata("design:type", String)
], createUserDto.prototype, "email", void 0);
__decorate([
    (0, api_property_decorator_1.ApiProperty)({ example: '20041406', description: 'password' }),
    __metadata("design:type", String)
], createUserDto.prototype, "password", void 0);
exports.createUserDto = createUserDto;
//# sourceMappingURL=create-user.dto.js.map