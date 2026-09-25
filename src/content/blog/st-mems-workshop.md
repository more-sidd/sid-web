---
title: Programming a State Machine Into a Sensor
date: 2026-09-17
excerpt: At an ST workshop I learned that MEMS sensors can run recognition logic on the sensor itself, so the microcontroller stays asleep until something actually happens.
tags: [Embedded, Sensors]
cover: /gallery/STM2.jpg
coverAlt: The X-NUCLEO-IKS5A1 sensor shield stacked on a NUCLEO-F401RE board
draft: false
---

I attended a hands-on MEMS sensor workshop at STMicroelectronics in
Burlington.

Modern ST MEMS sensors include a Finite State Machine and a Machine Learning
Core on the die. You program the recognition logic into the accelerometer
itself. The sensor then raises an interrupt only after it detects the event you
configured, so the microcontroller can stay asleep the rest of the time. For a
battery powered wearable that makes a large difference to runtime.

The FSM uses two kinds of state:

- **Command**: flow control and output, executed in one step, with no data sample needed
- **Condition (RNC)**: a reset/next pair that decides whether the program continues or starts over

That is enough to detect free fall, taps, wake on motion, and specific gesture
signatures.

The hardware was a [NUCLEO-F401RE](https://www.st.com/en/evaluation-tools/nucleo-f401re.html)
with an [X-NUCLEO-IKS5A1](https://www.st.com/en/evaluation-tools/x-nucleo-iks5a1.html)
sensor shield on top. The shield carries five MEMS parts on one board over I2C,
which makes it straightforward to compare them against each other.
