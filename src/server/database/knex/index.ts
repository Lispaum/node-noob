import knex from "knex";
import * as envs from "./environments";


let selectedEnv = process.env.NODE_ENV as 'dev' | 'prod' | 'test' 

export const Knex = knex(envs[selectedEnv])


