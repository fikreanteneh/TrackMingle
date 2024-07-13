import { container } from "tsyringe";
export const iocContainer = {
    get: (controller) => {
        return container.resolve(controller);
    },
};
//# sourceMappingURL=ioc.js.map