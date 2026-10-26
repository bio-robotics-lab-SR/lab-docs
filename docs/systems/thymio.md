# Thymio

Everything you need to get a Thymio II moving, sensing and running your own code, plus what to do when it doesn't.

| | |
|---|---|
| **Owner (PI)** | *to fill in* |
| **System champion** | *to fill in* |
| **Support tier** | *to fill in* |
| **Robots in the lab** | *number and ID range* |
| **Where they live** | *cabinet / charging station* |
| **Code repository** | *link to lab git* |
| **Last reviewed** | *date* |

Values on this page describe the standard Thymio II. Check the lab repository for the exact software versions we use.

## Your first 5 minutes

1. **Switch it on.** Hold the centre button on top for about 3 seconds. To switch off, hold it again for 3 seconds.
2. **Try a built-in behaviour.** Press the left or right arrow to cycle through the colours, then the centre button to start. It's the fastest way to check that a robot works.
3. **Connect it.** Use a USB *data* cable, or the wireless dongle for wireless robots. Open Thymio Suite and the robot should appear.
4. **Pick your path.** Visual blocks for teaching and quick tests, Python for research code, Aseba for event scripts on the robot. See [Programming](#programming).

### Built-in behaviours

| Colour | Behaviour | Use it to test |
|---|---|---|
| <span class="beh-dot" style="background:#2fb24a"></span> Green | **Friendly:** follows an object held in front of it | Front sensors |
| <span class="beh-dot" style="background:#f2c218"></span> Yellow | **Explorer:** drives around avoiding obstacles | Sensors and motors |
| <span class="beh-dot" style="background:#e23b3b"></span> Red | **Fearful:** backs away; reacts to being lifted | Accelerometer |
| <span class="beh-dot" style="background:#8a4bd6"></span> Purple | **Obedient:** driven with the arrow buttons or an IR remote | Buttons, motors |
| <span class="beh-dot" style="background:#25c4d8"></span> Cyan | **Investigator:** follows a dark line on a light floor | Ground sensors |
| <span class="beh-dot" style="background:#2c6be0"></span> Blue | **Attentive:** responds to claps | Microphone |

## Anatomy

Click or tab to a part of the robot (top view, front facing up).

<div class="anatomy" data-parts="../../assets/data/thymio-parts.json" data-default="prox" markdown="0">
<div class="anatomy-robot">
<svg viewBox="0 0 400 380" role="group" aria-label="Thymio top view with clickable parts">
<text x="200" y="22" text-anchor="middle" class="lab">FRONT</text>
<g class="hs" data-k="motors" tabindex="0" role="button" aria-label="Wheels and motors">
<rect x="64" y="168" width="24" height="92" rx="6" class="wheel"/>
<rect x="312" y="168" width="24" height="92" rx="6" class="wheel"/>
<circle class="mark" cx="76" cy="214" r="8"/>
<circle class="mark" cx="324" cy="214" r="8"/>
</g>
<path class="body" d="M90,132 Q92,58 200,52 Q308,58 310,132 L310,300 Q310,318 292,318 L108,318 Q90,318 90,300 Z"/>
<g class="hs" data-k="ground" tabindex="0" role="button" aria-label="Ground sensors, underneath">
<circle cx="172" cy="96" r="10" class="under"/>
<circle cx="228" cy="96" r="10" class="under"/>
<circle class="mark" cx="172" cy="96" r="4.5"/>
<circle class="mark" cx="228" cy="96" r="4.5"/>
<text x="200" y="124" text-anchor="middle" class="lab">ground (under)</text>
</g>
<g class="hs" data-k="prox" tabindex="0" role="button" aria-label="Front proximity sensors">
<circle class="mark" cx="101" cy="104" r="8"/><text x="80" y="92" class="lab">0</text>
<circle class="mark" cx="141" cy="70" r="8"/><text x="128" y="52" class="lab">1</text>
<circle class="mark" cx="200" cy="58" r="8"/><text x="196" y="42" class="lab">2</text>
<circle class="mark" cx="259" cy="70" r="8"/><text x="264" y="52" class="lab">3</text>
<circle class="mark" cx="299" cy="104" r="8"/><text x="312" y="92" class="lab">4</text>
</g>
<g class="hs" data-k="proxback" tabindex="0" role="button" aria-label="Back proximity sensors">
<circle class="mark" cx="145" cy="318" r="8"/><text x="141" y="344" class="lab">5</text>
<circle class="mark" cx="255" cy="318" r="8"/><text x="251" y="344" class="lab">6</text>
</g>
<g class="hs" data-k="usb" tabindex="0" role="button" aria-label="USB port and battery">
<rect class="mark" x="186" y="312" width="28" height="12" rx="3"/>
<text x="200" y="344" text-anchor="middle" class="lab">USB</text>
</g>
<g class="hs" data-k="leds" tabindex="0" role="button" aria-label="LEDs">
<circle cx="200" cy="188" r="62" class="ring"/>
<circle class="mark" cx="262" cy="160" r="7"/>
</g>
<g class="hs" data-k="buttons" tabindex="0" role="button" aria-label="Touch buttons">
<path class="mark" d="M200,140 l13,18 h-26 z"/>
<path class="mark" d="M200,236 l13,-18 h-26 z"/>
<path class="mark" d="M152,188 l18,-13 v26 z"/>
<path class="mark" d="M248,188 l-18,-13 v26 z"/>
<circle class="mark" cx="200" cy="188" r="15"/>
</g>
<g class="hs" data-k="inside" tabindex="0" role="button" aria-label="Internal sensors">
<rect class="mark" x="166" y="268" width="68" height="22" rx="5"/>
<text x="200" y="283" text-anchor="middle" class="lab nopoint">inside</text>
</g>
<g class="hs" data-k="sound" tabindex="0" role="button" aria-label="Speaker and IR remote receiver">
<circle class="mark" cx="122" cy="282" r="8"/>
<text x="104" y="303" class="lab">spk/IR</text>
</g>
</svg>
<p class="anatomy-hint">Numbers are sensor indices</p>
</div>
<div class="anatomy-detail" aria-live="polite"><p>Select a part of the robot to see its details.</p></div>
</div>

## Programming

=== "Visual (VPL / Scratch)"

    Best for courses, outreach and quick hardware checks.

    1. Install **Thymio Suite** from [thymio.org](https://www.thymio.org) (Windows, macOS, Linux).
    2. Connect the robot, open Thymio Suite, pick the robot, then choose **VPL** or **Scratch**.
    3. Build "when the front sensor sees something → stop the motors, turn the top LED red", then press **Run**.
    4. When teaching a group, give each student pair a fixed robot ID so programs don't land on someone else's robot.

=== "Python on the robot"

    Best for behaviours that must react fast, and for swarm experiments. Your Python is translated and runs *on* the robot, so it keeps working without a live link.

    ```bash
    pip install tdmclient
    python3 -m tdmclient run thymio_avoid.py
    ```

    ```python title="thymio_avoid.py"
    # Obstacle avoidance that runs on the Thymio itself.
    # Thymio Suite must be running (it provides the device manager).

    @onevent
    def prox():
        global prox_horizontal, motor_left_target, motor_right_target, leds_top
        if prox_horizontal[2] > 2000:        # something straight ahead
            motor_left_target = -150
            motor_right_target = 150
            leds_top = [32, 0, 0]
        elif prox_horizontal[0] > 1000:      # obstacle on the left: turn right
            motor_left_target = 200
            motor_right_target = -100
            leds_top = [32, 16, 0]
        elif prox_horizontal[4] > 1000:      # obstacle on the right: turn left
            motor_left_target = -100
            motor_right_target = 200
            leds_top = [32, 16, 0]
        else:
            motor_left_target = 200
            motor_right_target = 200
            leds_top = [0, 32, 0]
    ```

    Thymio variable names use underscores in Python (`prox.horizontal` becomes `prox_horizontal`). Only a subset of Python runs on the robot: integers, lists, if/while and functions.

=== "Python from your PC"

    Best for logging data, combining with Optitrack and learning loops. The script runs on the PC and reads and writes robot variables over the link, so mind the latency.

    ```python title="read_and_drive.py"
    from tdmclient import ClientAsync

    with ClientAsync() as client:
        async def prog():
            with await client.lock() as node:
                await node.wait_for_variables({"prox.horizontal"})
                for _ in range(100):                     # about 10 seconds
                    front = node.v.prox.horizontal[2]
                    speed = 200 if front < 1500 else 0
                    node.v.motor.left.target = speed
                    node.v.motor.right.target = speed
                    node.flush()                         # send the changes
                    print("front sensor:", front)
                    await client.sleep(0.1)
                node.v.motor.left.target = 0             # always stop at the end
                node.v.motor.right.target = 0
                node.flush()
        client.run_async_program(prog)
    ```

    Only one program can lock a robot at a time. Close Scratch or VPL on that robot first.

=== "Aseba script"

    Best for understanding the native event model. Open **Aseba Studio** from Thymio Suite.

    ```text
    # Runs 10 times per second, when new proximity values arrive
    onevent prox
      if prox.horizontal[2] > 2000 then
        motor.left.target = 0
        motor.right.target = 0
        call leds.top(32, 0, 0)
      else
        motor.left.target = 200
        motor.right.target = 200
        call leds.top(0, 32, 0)
      end

    # Centre button stops everything
    onevent button.center
      motor.left.target = 0
      motor.right.target = 0
    ```

## Variable reference

| Variable (Aseba) | What it is | Range | Event |
|---|---|---|---|
| `prox.horizontal[0..6]` | Proximity, 5 front + 2 back | 0 – ~4500 | prox (10 Hz) |
| `prox.ground.delta[0..1]` | Ground reflection | ~0 – 1000 | prox (10 Hz) |
| `motor.left.target` / `motor.right.target` | Set wheel speed | −500 – 500 (500 ≈ 20 cm/s) | — |
| `motor.left.speed` / `motor.right.speed` | Measured wheel speed | −500 – 500 | motor (100 Hz) |
| `button.center` (also forward, backward, left, right) | Touch buttons | 0 / 1 | buttons, button.center |
| `acc[0..2]` | Accelerometer x, y, z | −32 – 32 (1 g ≈ 23) | acc (16 Hz), tap |
| `temperature` | Temperature in tenths of °C | e.g. 215 = 21.5 °C | temperature (1 Hz) |
| `mic.intensity` | Sound level | 0 – 255 | mic (above `mic.threshold`) |
| `leds.top` | Top RGB LED, `call leds.top(r,g,b)` | 0 – 32 per channel | — |
| `leds.circle` | 8 LEDs around the buttons | 0 – 32 each | — |
| `sound.freq` | Tone, `call sound.freq(Hz, 1/60 s)` | — | sound.finished |
| `rc5.command` | Last IR remote command | 0 – 127 | rc5 |
| `timer.period[0..1]` | Timer periods in ms | 0 – 32767 | timer0, timer1 |

## Before you run an experiment

- [ ] Arena slot booked in the lab calendar
- [ ] Every robot charged and switched on
- [ ] Built-in yellow Explorer behaviour tested on each robot
- [ ] Wheels clean, no hair or dust
- [ ] Robot IDs noted; wireless channel set so you don't control another group's robots
- [ ] Program tested on one robot before deploying to all
- [ ] Optitrack markers fixed and tracked, if you use tracking
- [ ] Stop procedure ready: centre button, or a stop command in your script

## Troubleshooting

??? question "The robot won't switch on"
    1. Hold the centre button for a full 3 seconds.
    2. Plug it in. A fully drained battery may need about 30 minutes of charging before it switches on.
    3. Still nothing after charging: put it in the repair box and log a request.

??? question "Thymio Suite doesn't detect the robot"
    1. Use a USB data cable. Many cables only charge.
    2. Try another USB port, and avoid unpowered hubs.
    3. Close other programs that may hold the robot (another Thymio Suite, a Python script).
    4. Restart Thymio Suite with the robot switched on and plugged in.

??? question "Wireless robot can't be found, or I'm controlling someone else's robot"
    Common in swarm sessions.

    1. Check the dongle is plugged in and paired with this robot.
    2. With several groups in the lab, each group needs its own wireless network or channel. Set it with the wireless configurator in Thymio Suite.
    3. Ask the champion for the lab's channel plan.

??? question "It drives in a curve when both motors get the same speed"
    1. Clean the wheels; hair wraps around the axles.
    2. Check the battery: low charge makes the motors behave unevenly.
    3. Some asymmetry is normal. Correct for it in code, or close the loop with Optitrack.

??? question "Proximity values are jumpy or wrong"
    1. Dark, shiny or transparent surfaces reflect little infrared.
    2. Strong sunlight and infrared from the Optitrack cameras can disturb the sensors. Compare readings with tracking on and off.
    3. Clean the sensor windows on the front edge.

??? question "My program disappears when the robot restarts"
    Programs sent from a computer run until the robot restarts. To keep one on the robot, write it to the robot's memory from Aseba Studio. Agree this with the owner first: lab robots should normally start with the default behaviours.

??? question "Python (tdmclient) hangs or can't find a robot"
    1. Thymio Suite must be running; it provides the device manager tdmclient talks to.
    2. Another program has the lock: close Scratch, VPL or Aseba Studio on that robot.
    3. Check you installed the version pinned in the lab repository.

??? warning "Battery drains fast or the robot gets warm"
    1. Old batteries hold less charge. Note the robot ID and log it.
    2. Swollen, hot or smelly: stop using it immediately, unplug it and tell the champion.

## Thymio-specific rules

- Return robots switched off to the charging station, sorted by ID.
- Turn sounds off in shared sessions.
- Don't update firmware on lab robots yourself.
