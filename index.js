"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
auth_1.auth();
exports.main = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // code here
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsaUNBQThCO0FBQzlCLFdBQUksRUFBRSxDQUFBO0FBRUssUUFBQSxJQUFJLEdBQUcsQ0FBTyxHQUFhLEVBQUUsR0FBYyxFQUFFLEVBQUU7SUFDdEQsWUFBWTtBQUVoQixDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vYXV0aCc7XHJcbmF1dGgoKVxyXG5cclxuZXhwb3J0IGxldCBtYWluID0gYXN5bmMgKHJlcT86IFJlcXVlc3QsIHJlcz86IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAvLyBjb2RlIGhlcmVcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19