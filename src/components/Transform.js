import { Rect, Vector2 } from '../base/types';
import Component from '../base/Component';
export default class Transform extends Component {
    constructor({
        targetObject,
        rect = new Rect(),
        position = new Vector2(),
        anchor = new Vector2()
    }) {
        super({
            targetObject
        });
        this.rect = rect;
        this.position = position;
        this.anchor = anchor;
    }
}
