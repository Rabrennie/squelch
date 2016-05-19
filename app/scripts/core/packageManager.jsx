import Squelch from './squelchGlobal';

export default class PackageManager {
    constructor() {
        // TODO: don't hardcode the core command package
        this.packages = {
            core: require('../commands/coreCommandPackage')(Squelch)
        };
    }

    // TODO: implement adding/removing/toggling/retrieving packages
}
