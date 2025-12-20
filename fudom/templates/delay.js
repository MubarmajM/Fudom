const Delays = require('@emartech/delay');

async function delay(s){
    s*=1000;
    await Delays(s);
}
