/*
   Copyright 2016 Yuki KAN

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { Operation } from "express-openapi";
import sift from "sift";
import * as api from "../../api";
import Channel from "../../Channel";
import { ChannelTypes, ChannelType } from "../../common";

export const parameters = [
    {
        in: "path",
        name: "type",
        type: "string",
        enum: Object.keys(ChannelTypes),
        required: true
    }
];

export const get: Operation = (req, res) => {

    const channels = Channel.findByType(req.params.type as ChannelType).map(channel => {

        const ch: any = channel.export();

        ch.services = channel.getServices().map(service => ({
            id: service.id,
            serviceId: service.serviceId,
            networkId: service.networkId,
            name: service.name
        }));

        return ch;
    });

    api.responseJSON(res, sift(req.query, channels));
};

get.apiDoc = {
    tags: ["channels"],
    operationId: "getChannelsByType",
    parameters: [
        {
            in: "query",
            name: "channel",
            type: "string",
            required: false
        },
        {
            in: "query",
            name: "name",
            type: "string",
            required: false
        }
    ],
    responses: {
        200: {
            description: "OK",
            schema: {
                type: "array",
                items: {
                    $ref: "#/definitions/Channel"
                }
            }
        },
        default: {
            description: "Unexpected Error",
            schema: {
                $ref: "#/definitions/Error"
            }
        }
    }
};
