---
title: Visiting JW Fishers and Driving Their ROV
date: 2026-05-29
excerpt: JW Fishers has built underwater search gear in East Taunton for over sixty years. I toured the shop and flew one of their ROVs in the test pool.
tags: [Robotics, Field Notes]
cover: /gallery/jw1.jpg
coverAlt: A yellow JW Fishers ROV on a workbench in the shop
draft: false
---

I visited JW Fishers in East Taunton, roughly 45 miles south of Boston. For more
than sixty years, this family-owned company has built underwater search gear
like sonar systems, metal detectors, and marine cameras.

They handle the full design and fabrication of their ROV in house. The system
features seven thrusters, dual HD cameras, lights, a gripper, a modular payload
bay, and a 1,000-foot depth rating, with ROS2 handling internal communications.
Up close on the workbench, it feels surprisingly compact for a vehicle with that
capability. Its layout pairs a yellow pressure housing and domed acrylic camera
port with black-cowled thrusters and buoyancy floats mounted onto a PVC skid.

![The surface control unit opened up beside the pool](/gallery/jw2.jpg)

The entire operator interface fits inside one portable surface control case
containing the power supply, a small single-board computer, custom circuit
boards, and dense ribbon cable routing.

<div class="post-video">
  <video controls preload="metadata" playsinline>
    <source src="/gallery/jw3.mp4" type="video/mp4" />
    Your browser can't play this video.
  </video>
</div>

We then spent time driving the vehicle in their test pool. Because of tether
latency and thruster spin-up lag, the ROV drifts noticeably between commands,
making it easy to overshoot at first. After ten minutes of getting a feel for
the fluid drag and response delay, maneuvering became much more intuitive.

![The ROV's own camera looking up from a foot and a half of water](/gallery/jw4.jpg)

Here is the live view from the ROV's camera peering back up at the group from a
depth of 1.4 feet.
