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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/swagger/dist");
const api_use_tags_decorator_1 = require("@nestjs/swagger/dist/decorators/api-use-tags.decorator");
const card_model_1 = require("../cards/card.model");
const cards_service_1 = require("../cards/cards.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const logIn_user_dto_1 = require("./dto/logIn-user.dto");
const user_model_1 = require("./user.model");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService, cardService) {
        this.usersService = usersService;
        this.cardService = cardService;
    }
    async create(userDto) {
        const newUser = await this.usersService.createUser(userDto);
        await this.cardService.createCard(newUser.user_id);
        return newUser;
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    async getCardById(user_id) {
        const user = await this.usersService.getUserById(user_id);
        return user;
    }
    async loginUser(dto) {
        const user = await this.usersService.getUserbyEmail(dto);
        return user;
    }
};
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Create User and Card' }),
    (0, dist_1.ApiResponse)({ status: 200, type: user_model_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.createUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Get All Users' }),
    (0, dist_1.ApiResponse)({ status: 200, type: [user_model_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, dist_1.ApiOperation)({ summary: 'Get User bu ID' }),
    (0, dist_1.ApiResponse)({ status: 200, type: [user_model_1.User] }),
    (0, common_1.Get)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCardById", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [logIn_user_dto_1.LogInUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
UsersController = __decorate([
    (0, api_use_tags_decorator_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        cards_service_1.CardsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map