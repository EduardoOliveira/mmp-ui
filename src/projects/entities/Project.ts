import {Asset} from "../../assets/entities/Assets.ts";

export interface Project {
    uuid: string
    name: string
    description: string
    path: string
    external_link: string
    tags: string[]
    default_image_path: string
    initialized: boolean
    assets: Array<Asset>
}