---
title: Programming a State Machine Into a Sensor
date: 2026-07-16
excerpt: A day at STMicroelectronics learning to offload motion detection from the microcontroller onto the sensor itself, so the host stays asleep until something actually happens.
tags: [Embedded, Sensors]
cover: /gallery/STM2.jpg
coverAlt: The X-NUCLEO-IKS5A1 sensor shield stacked on a NUCLEO-F401RE board
draft: false
---

**July 16, 2026 · Embedded · Sensors**

I spent a day at STMicroelectronics in Burlington for a hands-on workshop on
offloading motion detection from microcontrollers onto the sensors themselves.

Modern ST MEMS accelerometers include an on-die Finite State Machine (FSM) and
Machine Learning Core. Instead of keeping your MCU awake to constantly poll I2C
data, you load the event-recognition logic directly into the sensor. The host
processor stays asleep until the sensor detects the exact motion signature you
programmed and fires an interrupt, which is a huge win for battery-powered
wearables.

Building an FSM comes down to combining two state types:

- **Command:** Executes flow control and outputs in a single clock step without
  waiting for a new sample.
- **Condition (RNC):** Evaluates incoming sensor data against a reset/next pair
  to decide whether the sequence moves forward or restarts.

Using an STM32 [NUCLEO-F401RE](https://www.st.com/en/evaluation-tools/nucleo-f401re.html)
with an [X-NUCLEO-IKS5A1](https://www.st.com/en/evaluation-tools/x-nucleo-iks5a1.html)
shield (which puts five MEMS sensors on one board over I2C), we configured and
compared live triggers for free fall, taps, wake-on-motion, and custom gestures
right on the hardware.
