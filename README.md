# persist.ml

## Busted ?

It seems the app won't work in background i.e., if you exit chrome the app sucks and timer doesn't seem to be working as it freezes after 10-30secs.. need to look for some alternate to fix this.

## Testing phase:

- [ ] Test if sound can be executed by a webpage after certain interval?...

## Feats/Goals :

- [x] Add a +5 mins button which can be used dynamically only i.e., only if either break time or pomodoro time is running.
- [x] Remove the hassel of everytime setting the timer of 5 mins and 25 mins sometimes.
- [ ] Continuity: continue 5 minutes break automaticaly after 30 sec relax break on a full pomodoro completion.
- [ ] Add sound test button in the app.
- [ ] After 3 pomodoros it should set a break time of 25 minutes automatically so as to follow pomodoro principles and then again work for same like 3 regular pomodoros, yo!
- [ ] Setting button to allow changing default pomodoro, default break time and default break time.
- [ ] Add a label option there as well.

## Ui notes

Buttons:

- [x] +5min/-5min dynamic buttons and it is shown onlg when pomorodo or break time is active, and one is clear button.
- [x] Show the countdown in case of both i.e., pomodoro and the timer.
- [ ] Run Pomodoro: 25min button
- [ ] Run Break: 5min break button, test sound button
- [ ] Tets sound button.
- [ ] Checkbox - Continuity (by default ON): it'll make the break run automatically after the pomodoro and then run the pomodoro after the break and so on.
