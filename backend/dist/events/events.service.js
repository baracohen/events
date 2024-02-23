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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./entities/event.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let EventsService = class EventsService {
    constructor(eventsRepository, userService) {
        this.eventsRepository = eventsRepository;
        this.userService = userService;
    }
    async create(createEventDto) {
        const newEvent = await this.eventsRepository.create(createEventDto);
        const users = await this.userService.getUserById(createEventDto.userId);
        newEvent.users = [users];
        await this.eventsRepository.save(newEvent);
        console.log(newEvent.users);
        return newEvent;
    }
    findAll() {
        return `This action returns all events`;
    }
    async findOne(id) {
        const event = await this.eventsRepository.findOne({
            where: {
                id: id,
            },
        });
        return event;
    }
    update(id, updateEventDto) {
        return `This action updates a #${id} event`;
    }
    remove(id) {
        return `This action removes a #${id} event`;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], EventsService);
//# sourceMappingURL=events.service.js.map