import {FlipFlappers} from "./app/flip-flappers";
/**
 * Created by yuriel on 2/6/17.
 */
export class AppMain {
    constructor(public flapper: FlipFlappers) {}

    flapping() {
        this.flapper.flapping();
    }
}