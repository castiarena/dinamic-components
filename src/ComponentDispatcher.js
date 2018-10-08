const components = require.context('./components', true, /\.js$/);
const path = require('path');

class ComponentDispatcher {
    constructor() {
        this.components = components.keys().reduce((all, name) => {
            const nameFinal = path.basename(name).replace(path.extname(name), '');
            all[nameFinal] = components(name);
            return all;
        },  {});
    }
    dispatch(name){
        return this.components[name].default || this.components[name];
    }
}

export default ComponentDispatcher;