# aimingforthestars

# Project Overview

## Project Name

Aiming for the Stars

## Project Description

Interactive solar system with dynamic and static information about the palentary bodies within.

## Wireframes

https://whimsical.com/6gcF8ATuEAoE6mTPVTRU2x

## Component Hierarchy

https://whimsical.com/solar-system-KzsLbKUkwnHEuXnNqRstZi

## API and Data Sample

Airtable will handle user information while NASA API will handle planetary display information.

NASA API

```json
{
    flrID: "2016-01-01T23:00:00-FLR-001",
    instruments: [
        {
            displayName: "GOES15: SEM/XRS 1.0-8.0"
        }
    ],
    beginTime: "2016-01-01T23:00Z",
    peakTime: "2015-01-02T00:10Z",
    endTime: null,
    classType: "M2.3",
    sourceLocation: "S21W73",
    activeRegionNum: 12473,
    linkedEvents: [
        {
            activityID: "2016-01-01T23:12:00-CME-001"
        },
        {
            activityID: "2016-01-02T02:48:00-SEP-001"
        },
        {
            activityID: "2016-01-02T04:30:00-SEP-001"
        }
    ],
    link: "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/FLR/9963/-1"
},
{
    flrID: "2016-01-28T11:48:00-FLR-001",
    instruments: [
        {
            displayName: "GOES15: SEM/XRS 1.0-8.0"
        }
    ],
    beginTime: "2016-01-28T11:48Z",
    peakTime: "2016-01-28T12:02Z",
    endTime: "2016-01-28T12:56Z",
    classType: "C9.6",
    sourceLocation: "N03W47",
    activeRegionNum: 12488,
    linkedEvents: [
        {
            activityID: "2016-01-28T12:24:00-CME-001"
        }
    ],
    link: "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/FLR/10122/-1"
}
```


### MVP/PostMVP

#### MVP 

- Use NASA API to display dynamic and static information about all 9 planets and the sun
- Create and implement custom API via Airtable to allow users to create their own planet including name, mass, color/textures, elemental composition, moons, and description.
- Display username and avatar in Navbar

#### PostMVP

- Implement THREE.js, spacekit.js, and react three fiber to create a 3d solar system
- Use THREE.js to import flight controls and allow signed in users to traverse the 3d solar system in first person
- Allow a 3rd person display with selectable rocket ships
- Create an Ephemerides calculator to display planetary alignment in realtime

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 7| Proposal / Functionality for NASA and airtable APIs | Incomplete
|July 8| NavBar / Username Form (including avatar) | Incomplete
|June 9| Create Planet Component / Display Planetary Info Component | Incomplete
|June 10| Create Solar System Component | Incomplete
|June 11| Flight Controls Component | Incomplete
|June 12| Ephemerides Calculator Component | Incomplete
|June 13| Troubleshooting / Finishing Touches on CSS styling
|June 14| Presentation

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Functionality for APIs | H | 3hrs |  |  |
| NavBar | H | 3.5hrs |  |  |
| UserName Form | H | 3hrs |  |  |
| Avatar Creator | H | 2.5hrs |  |  |
| Create Planet Component | H | 4.5hrs |  |  |
| Display Planetary Info Component| H | 3hrs |  |  |
| Create Solar System Component| H | 5hrs |  |  |
| Flight Controls Component| M | 5hrs |  |  |
| Ephemerides Calculator Component| L | 6hrs |  |  |
| Initial CSS| 4hrs | M |  |  |
| Final CSS Styling| M | 4hrs |  |  |
| Troubleshooting| H | 6hrs |  |  |
| Total | H | 33.5hrs |  |  |
