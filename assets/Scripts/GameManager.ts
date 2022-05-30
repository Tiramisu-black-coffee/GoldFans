import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    start() {

    }

    update(deltaTime: number) {

    }

    onStartButtonClicked() {
        director.loadScene("Game");
    }
}
