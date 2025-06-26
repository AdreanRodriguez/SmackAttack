

![Group 35](https://github.com/user-attachments/assets/c9dbb609-a994-4f0c-b768-f97f7fdc4d23)

Instagram till illustratören: [JimmieSlice](https://www.instagram.com/jimmieslice/)



### SmackAttack är ett snabbt och reaktivt mobilanpassat webbspel byggt i React + TypeScript, där målet är att samla poäng genom att klicka på "onda"(röd) karaktärer och undvika de "goda"(blå). Spelet utspelar sig framför en buss med olika fönster och buskar där karaktärer dyker upp slumpmässigt.

# 🎮 Spelidé
- Spelet börjar med 15 sekunder på klockan.

- Karaktärer (goda eller onda) dyker upp slumpmässigt från olika platser:

  - Fönster

  - Buskar

  - Under bussen

  - Bussens vänstra/högra sida

- Du får +10 poäng och +2 sekunder för varje ond karaktär du klickar på.

- Om du klickar på en god karaktär får du -3 sekunder som straff.

- Spelet blir snabbare och svårare ju högre poäng du får – fler karaktärer dyker upp snabbare, och animationerna blir kortare.

- Spelet avslutas när tiden tar slut.
---

# 🧠 Spelmekanik
- Dynamisk svårighetsgrad: baserat på poängen justeras:

  - spawnInterval (hur ofta nya karaktärer dyker upp)

  - animationDuration (hur länge de är synliga)

  - goodCharacterProbability (sannolikhet att en karaktär är god)

  - maxCharacters (hur många som kan vara synliga samtidigt)

- Endast ett begränsat antal positioner kan ha aktiva karaktärer samtidigt.
---

# 📱 Spelupplevelse
- Designat primärt för mobiltelefon i landskapsläge.

- Om användaren spelar i porträttläge visas en blockerare med instruktion att rotera enheten.

- Spelet har ett startfönster, en aktiv spelplan och ett Game Over-fönster med poängvisning.
---

# 🛠️ Teknologi
- React

- TypeScript

- uuid – för unika karaktärs-ID:n

- Animeringar via CSS (t.ex. slide-up, slide-left-to-right, slide-under-bus)
---

# ▶️ Så spelar du
### 1. Öppna spelet på din mobil i landskapsläge.

### 2. Klicka på "Start".

### 3. Reagera snabbt:
  - Tryck på onda karaktärer ✅

  - Undvik att trycka på goda karaktärer ❌

### 4. Se hur långt du kan ta dig innan tiden är ute!
