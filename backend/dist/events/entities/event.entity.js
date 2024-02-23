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
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/user.entity");
const guest_entity_1 = require("../../guests/entities/guest.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
let Event = class Event {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.default, (user) => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Event.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => guest_entity_1.default, (guest) => guest.event),
    __metadata("design:type", Array)
], Event.prototype, "guests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.default, (task) => task.event),
    __metadata("design:type", Array)
], Event.prototype, "tasks", void 0);
Event = __decorate([
    (0, typeorm_1.Entity)()
], Event);
exports.default = Event;
//# sourceMappingURL=event.entity.js.map