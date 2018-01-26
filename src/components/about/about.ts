import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../util/log';

interface IItem {
    message: string;
}

@Component({
    template: require('./about.html')
})
export class AboutComponent extends Vue {
    ifToggle: boolean = false;
    showToggle: boolean = false;
    items: Array<IItem> = [];

    mounted() {
        //
    }

    ifToggleFunc() {
        this.ifToggle = !this.ifToggle;
    }

    showToggleFunc() {
        this.showToggle = !this.showToggle;
    }

    addItem(): void {
        this.items.push({ message: "Ciao " + this.items.length });
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }
}
