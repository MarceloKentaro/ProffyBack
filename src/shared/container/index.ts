import ClassRepository from "@useCases/Class/repositories/ClassRepository";
import ConnectionsRepository from "@useCases/Connection/repositories/ConnectionRepository";
import ScheduleRepository from "@useCases/Schedule/repositories/ScheduleRespository";
import UserRepository from "@useCases/User/repositories/UserRepository";

export const connectionsRepository = new ConnectionsRepository();
export const userRepository = new UserRepository();
export const classesRepository = new ClassRepository();
export const scheduleRepository = new ScheduleRepository();