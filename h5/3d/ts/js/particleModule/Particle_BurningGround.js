var Particle_BurningGround = /** @class */ (function () {
    function Particle_BurningGround() {
        Laya3D.init(0, 0);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        var scene = Laya.stage.addChild(new Laya.Scene3D());
        var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
        camera.transform.translate(new Laya.Vector3(0, 2, 4));
        camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
        Laya.Sprite3D.load("../../res/threeDimen/particle/ETF_Burning_Ground.lh", Laya.Handler.create(this, function (sprite) {
            scene.addChild(sprite);
        }));
    }
    return Particle_BurningGround;
}());
new Particle_BurningGround;
