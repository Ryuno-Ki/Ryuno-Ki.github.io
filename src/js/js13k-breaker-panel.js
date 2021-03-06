(function(global) {
    "use strict";
    var game, app, element, ps, switchElement, se, e, circuit, c, logic, svg, switchEl;

    game = document.getElementById("game");

    // Shorthands
    app = global.JS13KBP;
    element = app.element;
    svg = app.svg;

    ps = new element.PowerSourceElement("power-source");
    switchElement = new element.SwitchElement("switchElement");
    se = new element.SwitchElement("se");
    e = new element.SwitchElement("e");
    circuit = new element.CircuitElement("circuit");
    c = new element.ConsumerElement("consumer");

    switchElement.setInput(se);
    se.setInput(e);

    circuit.addPowerSource(ps);
    circuit.addElectronic(switchElement);
    circuit.addElectronic(se);
    circuit.addElectronic(e);
    circuit.addConsumer(c);

    logic = document.createElement('div');
    logic.innerHTML += circuit.renderCircuitLogic();
    // game.appendChild(logic);

    game.appendChild(svg.svg);
    svg.svg.appendChild(svg.renderPowerSource({
        id: ps.getType(),
        bb: [0, 0, 25, 25],
    }));
    svg.svg.appendChild(svg.renderSwitchElement({
        id: se.getType(),
        bb: [25, 0, 50, 25],
    }));
    svg.svg.appendChild(svg.renderCable({
        id: "cable",
        inbound: [50, 12.5],
        outbound: [75, 87.5],
    }));
    svg.svg.appendChild(svg.renderConsumer({
        id: c.getType(),
        bb: [75, 75, 100, 100],
    }));
    svg.svg.outerHTML = svg.svg.outerHTML;  // Enforce repaint

    svg.dragAndDrop(game.getElementsByTagName('g'));
})(this);
