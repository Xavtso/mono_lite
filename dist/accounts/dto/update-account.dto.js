"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_account_dto_1 = require("./create-account.dto");
class UpdateAccountDto extends (0, swagger_1.PartialType)(create_account_dto_1.CreateAccountDto) {
}
exports.UpdateAccountDto = UpdateAccountDto;
//# sourceMappingURL=update-account.dto.js.map