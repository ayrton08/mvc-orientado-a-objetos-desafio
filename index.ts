import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
    const result = minimist(argv);
    
    return {
        action: result?.action,
        params: result?.params
    };
}

function main() {
    const controller = new ContactsController();
    const params = parseaParams(process.argv.slice(2));
    
    controller.processOptions(params);
}
main();
