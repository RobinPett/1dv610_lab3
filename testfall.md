# UC1 - Navigering

> ## Testfall 1.1
>
> ### Input
>
> Navigera till startsidan
>
> ### Output
>
> Startsida visas med en navigeringsmeny längst upp med länkar till: "Home, Sounds, About" samt "Sign up" och "Sign in" längst upp till höger. En sökruta finns också.

> ## Testfall 1.2
>
> ### Input
>
> Trycker på "Home" länken.
>
> ### Output
>
> Startsidan visas med huvudmeny längst upp.

> ## Testfall 1.3
>
> ### Input
>
> Trycker på "Sounds" länken.
>
> ### Output
>
> En ny sida visas med rubriken "Sounds". En lista med ljudeffekter syns. Knappar för navigering mellan sidor finns. Navigering syns längs upp.

> ## Testfall 1.4
>
> ### Input
>
> Trycker på "About" länken.
>
> ### Output
>
> En ny sida laddas med rubriken "About" och en paragraf med information om sidan. Navigering syns längs upp.

> ## Testfall 1.5
>
> ### Input
>
> Trycker på "Sign up" länken.
>
> ### Output
>
> En ny sida visas med rubriken "Enter account info" med ett formulär med fälten "Email, Username och Password". Navigering syns längs upp.

> ## Testfall 1.6
>
> ### Input
>
> Trycker på "Sign in" länken.
>
> ### Output
>
> En ny sida laddas med rubriken "Enter account info" med ett formulär med fälten "Username och Password". Navigering syns längs upp.

> ## Testfall 1.7
>
> ### Input
>
> Navigerar till en sida som inte finns.
>
> ### Output
>
> En 404 sida visas med meddelandet "Not Found" Navigering syns längs upp.

# UC2 - Registrering

> ## Testfall 2.1 - Lyckad registrering
>
> ### Input
>
> * Testfall 1.5
> * Email, Användarnamn och Lösenord fälten fylls i
> * Tryck på "Sign up"
>
> ### Output
>
> * Texten "Successful sign up" visas
> * Testdall 1.6

> ## Testfall 2.2 - Misslyckad registrering: Inga inskrivna uppgifter
>
> ### Input
>
> * Testfall 1.5
> * Email, Användarnamn och Lösenord fälten är tomma
> * Tryck på "Sign up"
>
> ### Output
>
> * Email, Användarnamn och Lösenord fälten rödmarkeras
> * Meddelande: "Enter valid Email", "Enter valid username", "Enter valid password - At least 8 characters"
> * Testfall 1.5 - Sign up formuläret visas

> ## Testfall 2.3 - Misslyckad registrering: Endast email är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange "test@test.com" som email - username och password är tomma.
> * Tryck på "Sign up"
>
> ### Output
>
> * Username och Password fälten rödmarkeras
> * Meddelande: "Enter valid username", "Enter valid password - At least 8 characters"
> * Testfall 1.5 - Sign up formuläret visas med "test@test.com" i email fältet

> ## Testfall 2.4 - Misslyckad registrering: Endast username är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange test som Username - email och password är tomma.
> * Tryck på "Sign up"
>
> ### Output
>
> * Email och Password fälten rödmarkeras
> * Meddelande: "Enter valid email", "Enter valid password - At least 8 characters"
> * Testfall 1.5 - Sign up formuläret visas med "test" i username fältet

> ## Testfall 2.5 - Misslyckad registrering: Endast password är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange password som Password - email och username är tomma.
> * Tryck på "Sign up"
>
> ### Output
>
> * Email och Username fälten rödmarkeras
> * Meddelande: "Enter valid email", "Enter valid username"
> * Testfall 1.5 - Sign up formuläret visas med tomma fält

> ## Testfall 2.6 - Misslyckad registrering: Felaktigt email är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange "test" som email, "test" i username och "password" som password.
> * Tryck på "Sign up"
>
> ### Output
>
> * Email fältet rödmarkeras
> * Meddelande: "Enter valid email"
> * Testfall 1.5 - Sign up formuläret visas

> ## Testfall 2.7 - Misslyckad registrering: Felaktigt username är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange "test@test.com" som email, "12345" i username och "password" som password.
> * Tryck på "Sign up"
>
> ### Output
>
> * Username fältet rödmarkeras
> * Meddelande: "Enter valid username"
> * Testfall 1.5 - Sign up formuläret visas

> ## Testfall 2.8 - Misslyckad registrering: Felaktigt password är ifyllt
>
> ### Input
>
> * Testfall 1.5
> * Ange "test@test.com" som email, "test" i username och "pass" som password.
> * Tryck på "Sign up"
>
> ### Output
>
> * Password fältet rödmarkeras
> * Meddelande: "Enter valid password - At least 8 characters"
> * Testfall 1.5 - Sign up formuläret visas

# UC3 - Inloggning

> ## Testfall 3.1 - Lyckad inloggning
>
> ### Input
>
> * Testfall 1.6
> * "test" som Username och "password" som Password
> * Tryck på "Sign in"
>
> ### Output
>
> * Texten "Successful sign in" visas
> * Startsida visas med en profil ikon uppe i högra hörnet visas.

> ## Testfall 3.2 - Misslyckad inloggning: Inga inskrivna uppgifter
>
> ### Input
>
> * Testfall 1.6
> * Username och Password lämnas tomma
> * Tryck på "Sign in"
>
> ### Output
>
> * Username och Password fälten rödmarkeras
> * Meddelande "Enter username", "Enter password"

> ## Testfall 3.2 - Misslyckad inloggning: Endast username ifyllt
>
> ### Input
>
> * Testfall 1.6
> * Ange "test" som Username och Password lämnas tomt
> * Tryck på "Sign in"
>
> ### Output
>
> * Password fältet rödmarkeras
> * Meddelande "Enter password"

> ## Testfall 3.3 - Misslyckad inloggning: Endast password är ifyllt
>
> ### Input
>
> * Testfall 1.6
> * Username lämnas tomt, ange "password" som Password.
> * Tryck på "Sign in"
>
> ### Output
>
> * Username fältet rödmarkeras
> * Meddelande "Enter username"

> ## Testfall 3.4 - Misslyckad inloggning: Felaktigt username
>
> ### Input
>
> * Testfall 1.6
> * Ange "TTest" som Username och "password" som password
> * Tryck på "Sign in"
>
> ### Output
>
> * Meddelande "Failed to sign in. Username or Password is wrong.
> * Testfall 1.6

> ## Testfall 3.4 - Misslyckad inloggning: Felaktigt password
>
> ### Input
>
> * Testfall 1.6
> * Ange "test" som Username och "pass" som password
> * Tryck på "Sign in"
>
> ### Output
>
> * Meddelande "Failed to sign in. Username or Password is wrong.
> * Testfall 1.6

# UC4 - Utloggning

> ## Testfall 4.1 - Lyckad utloggning
>
> ### Input
>
> * Testfall 3.1 - Inloggad användare
> * Tryck på "Sign out" i navigeringen
>
> ### Output
>
> * Informationsmeddelande om att användaren har loggats ut visas
> * Startsida visas "Sign up" och "Sign in" i navigeringen.

> ## Testfall 4.2 - Misslyckad utloggning
>
> ### Input
>
> * Testfall 3.1 - Inloggad användare
> * Kastar ett eget Error för att simulera fel
> * Tryck på "Sign out" i navigeringen
>
> ### Output
>
> * Varningsmeddelande om att ett problem uppstod
> * Startsida visas "Sign up" och "Sign in" i navigeringen.

# UC5 - Ladda upp ljudeffekt

> ## Testfall 5.1 - Lyckad uppladdning av ljudeffekt
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange "Car" som titel
> * Ange en "Wav" ljudfil
> * Ange "Car engine sound effect" som Description - (Ej obligatorisk)
> * Ange "Vehicles" som Category
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Success" meddelande visas
> * Navigerar användaren till sidan med det nyskapade ljudet
>
> ## Testfall 5.2 - Misslyckad uppladdning : Inga uppgifter ifyllda
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange ingenting i fälten
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att fylla i saknade uppgifter
> * Titel, browse och category fälten markeras i rött.
> * Användaren stannar kvar på sidan.
>
> ## Testfall 5.3 - Misslyckad uppladdning : Endast Titel ifylld
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange "Car" som Titel
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att fylla i saknade uppgifter
> * Browse och category fälten markeras i gult
> * Användaren stannar kvar på sidan
>
> ## Testfall 5.4 - Misslyckad uppladdning : Endast fil är vald
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange en "Wav" ljudfil
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att fylla i saknade uppgifter
> * Titel och category fälten markeras i rött
> * Användaren stannar kvar på sidan
>
> ## Testfall 5.5 - Misslyckad uppladdning : Endast category är vald
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange "Vehicles" som Category
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att fylla i saknade uppgifter
> * Titel och Browse fälten markeras i rött
> * Användaren stannar kvar på sidan
>
> ## Testfall 5.6 - Misslyckad uppladdning : En icke-ljudfil laddas upp
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange "Car" som Titel
> * Ange en icke-ljud fil - test.txt
> * Ange "Vehicles" som Category
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att ladda upp en ljudfil
> * Browse fältet markeras i gult
> * Användaren stannar kvar på sidan
>
> ## Testfall 5.7 - Misslyckad uppladdning : En icke-ljudfil maskerad som ljudfil laddas upp
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till "Add Sound" länk i navigeringen
> * Ange "Car" som Titel
> * Ange en icke-ljud fil - test.txt namnges som "test.wav" och anges
> * Ange "Vehicles" som Category
> * Tryck på "Upload" knappen
>
> ### Output
>
> * Ett "Warning" meddelande visas som uppmanar användaren att ladda upp en ljudfil
> * Browse fältet markeras i rött
> * Användaren stannar kvar på sidan

# UC6 - Lista ljudeffekter

> ## Testfall 6.1 - Lyckad hämtad lista med ljudeffekter
>
> ### Input
>
> * Testfall 1.3
>
> ### Output
>
> * Texten "All sounds" visas
> * Lista med 3 ljudeffekter visas
> * Knappar för "Previous", "Next" och antal sidor finns

> ## Testfall 6.2 - Lyckad hämtad lista utan ljudeffekter
>
> ### Input
>
> * Testfall 1.3
>
> ### Output
>
> * Texten "All sounds" visas
> * Meddelande: "No sounds exists"

> ## Testfall 6.3 - Misslyckad hämtad lista med ljudeffekter
>
> ### Input
>
> * Testfall 1.3
>
> ### Output
>
> * Texten "All sounds" visas
> * Meddelande: "Failed to fetch sounds"
> * Knapp visas med text: "Try again"

> ## Testfall 6.4 - Lyckad navigering till nästa sida
>
> ### Input
>
> * Testfall 1.3
> * Sidan skall vara namngiven som "Page 1"
> * Klicka på "Next" Knappen
>
> ### Output
>
> * Texten "All sounds" visas
> * Texten "Page 2" visas
> * En lista med 3 nya ljudeffekter visas

> ## Testfall 6.5 - Misslyckad navigering till nästa sida
>
> ### Input
>
> * Testfall 1.3
> * Sidan skall vara namngiven som "Page 1"
> * Klicka på "Next" knappen
>
> ### Output
>
> * Texten "All sounds" visas
> * Meddelande "Failed to navigate, try again"
> * En knapp med texten "Try again" visas

> ## Testfall 6.6 - Lyckad navigering till föregående sida
>
> ### Input
>
> * Testfall 1.3
> * Sidan skall vara namngiven som "Page 2"
> * Klicka på "Previous" knappen
>
> ### Output
>
> * Texten "All sounds" visas
> * Texten "Page 1" visas
> * En lista med 3 nya ljudeffekter visas

> ## Testfall 6.7 - Misslyckad navigering till föregående sida
>
> ### Input
>
> * Testfall 1.3
> * Sidan skall vara namngiven som "Page 2"
> * Klicka på "Previous" knappen
>
> ### Output
>
> * Texten "All sounds" visas
> * Meddelande "Failed to navigate, try again"
> * En knapp med texten "Try again" visas

# UC7 - Visa specifik ljudeffekt

> ## Testfall 7.1 - Lyckad hämtad specifik ljudeffekt
>
> ### Input
>
> * Navigera till specifik ljudeffekt med ID - /sounds/ID
>
> ### Output
>
> * Namnet på ljudet, beskrivning och kategori visas i text
> * En ljudspelare visas

> ## Testfall 7.2 - Misslyckad hämtad specifik ljudeffekt
>
> ### Input
>
> * Navigera till specifik ljudeffekt med felaktigt ID - /sounds/ID
>
> ### Output
>
> * 404 Sida

> ## Testfall 7.3 - Misslyckad hämtad specifik ljudeffekt - Korrekt ID
>
> ### Input
>
> * Navigera till specifik ljudeffekt med ett giltigt ID - /sounds/ID
> * Kontakt med databas tas bort - Simulerat
>
> ### Output
>
> * 500 Internal server - Svar från backend
> * Meddelande om att resursen ej går att ladda, Försök igen.
> * Knapp för att försöka ladda sidan igen.

> ## Testfall 7.4 - Spela / Pausa ljud
>
> ### Input
>
> * Testfall 1.1
> * Tryck på Spela knapp
> * Tryck på Pausa knapp
>
> ### Output
>
> * Ljudspelaren spelar upp ljudeffekten
> * Ljudspelaren stannar

> ## Testfall 7.5 - Hoppa fram i tiden i ljudspelaren
>
> ### Input
>
> * Testfall 1.1
> * Tryck på en tidpunkt i spelarens tidslinje
> * Tryck på Spela knappen
>
> ### Output
>
> * Ljudspelaren spelar upp ljudeffekten från vald tidpunkt

> ## Testfall 7.6 - Ändra volym
>
> ### Input
>
> * Testfall 1.1
> * Tryck på högtalarikonen
> * Dra i slidern mellan högsta och lägsta intervallet
>
> ### Output
>
> * Ljudspelaren spelar upp ljudeffekten med olika ljudnivåer

# UC8 - Konvertering & Nedladdning av ljudeffekt

> ## Testfall 8.1 - Lyckad konvertering & nedladdning
>
> ### Input
>
> * Testdall 3.1 - Inloggad användare
> * Navigera till specifik ljudeffekt med ID - /sounds/ID
> * Klicka på "Download" och välj "MP3"
>
> ### Output
>
> * Indikation på laddning syns - Spinner
> * En prompt att ladda ned ljudet visas
> * Namnet på ljudet ska vara detsamma som titel
> * Ljudformatet på den nedladdade filen är "MP3"

> ## Testfall 8.2 - Misslyckad konvertering & nedladdning
>
> ### Input
>
> * Testfall 3.1 - Inloggad användare
> * Navigera till specifik ljudeffekt med ID - /sounds/ID
> * Klicka på "Download" och välj "MP3"
> * Simulera fel genom att stänga av databas
>
> ### Output
>
> * Indikation på laddning syns - Spinner
> * Ett felmeddelande syns

# UC9 - Söka efter ljudeffekt

> ## Testfall 9.1 - Lyckad sökning
>
> ### Input
>
> * Ljudeffekter finns uppladdade
> * Skriv i sökterm - "Car"
> * Klicka på sökknapp
>
> ### Output
>
> * Indikation på laddning syns - Spinner
> * En lista med matchande ljud visas

> ## Testfall 9.2 - Lyckad sökning - Inga matchande ljudeffekter
>
> ### Input
>
> * Skriv i sökterm - "Car123"
> * Klicka på sökknapp
>
> ### Output
>
> * Indikation på laddning syns - Spinner
> * Meddelande om att inga ljud kunde hittas visas

> ## Testfall 9.3 - Misslyckad sökning
>
> ### Input
>
> * Ljudeffekter har laddats upp - Testtall 5.1
> * Skriv i sökterm - "Car"
> * Klicka på sökknapp
>
> ### Output
>
> * Indikation på laddning syns - Spinner
> * Felmeddelande visas med försök igen knapp

# UC10 - Hantera spellistor

> ## Testfall 10.1 - Lyckad skapad spellista
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till sida för spellistor - "My sounds" i användarens profil i navigering
> * Tryck på "Create new playlist"
> * Ange "New playlist" som namn
> * Klicka på "Create"
>
> ### Output
>
> * Lista med spellistor visas
> * En spellista med namn "New Playlist" visas

> ## Testfall 10.2 - Misslyckad skapad spellista
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till sida för spellistor - "My sounds" i användarens profil i navigering
> * Tryck på "Create new playlist"
> * Ange "New playlist" som namn
> * Klicka på "Create"
>
> ### Output
>
> * Felmeddelande visas
> * Lista med spellistor visas - Användaren kan försöka igen

> ## Testfall 10.3 - Lyckad visning av lista med skapade spellistor
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till sida för spellistor - "My sounds" i användarens profil i navigering
>
> ### Output
>
> * Lista med spellistor visas

> ## Testfall 10.4 - Misslyckad visning av lista med skapade spellistor
>
> ### Input
>
> * Testfall 3.1 - Lyckad inloggning
> * Navigera till sida för spellistor - "My sounds" i användarens profil i navigering
>
> ### Output
>
> * Felmeddelande med "Try again" knapp visas
> * Användaren kan försöka ladda om lista med spellistor

> ## Testfall 10.5 - Lyckad redigering av spellista
>
> ### Input
>
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på redigeringsikon för "New playlist" - Pennan
> * Ange "New playlist 2" i popup rutan
> * Klicka på "Update" knappen för att bekräfta ändringen
>
> ### Output
>
> * Lista med ljudeffekter visas
> * Lyckat meddelande om uppdatering visas
> * "New playlist" har bytt namn till "New playlist 2"

> ## Testfall 10.6 - Misslyckad redigering av spellista
>
> ### Input
>
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på redigeringsikon för "New playlist" - Pennan
> * Ange "New playlist 2" i popup rutan
> * Klicka på "Update" knappen för att bekräfta ändringen
>
> ### Output
>
> * Felmeddelande visas
> * Lista med ljudeffekter visas
> * Användaren kan försöka igen

> ## Testfall 10.7 - Lyckad borttagning av spellista
>
> ### Input
>
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på borttagningsikonen för "New playlist" - Papperskorg
> * Klicka på "Yes, delete" för att bekräfta borttagning av listan
>
> ### Output
>
> * Lyckat meddelande om borttagning visas
> * Lista med ljudeffekter visas
> * "New playlist" listan är borta

> ## Testfall 10.8 - Misslyckad borttagning av spellista
>
> ### Input
>
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på borttagningsikonen för "New playlist" - Papperskorg
> * Klicka på "Yes, delete" för att bekräfta borttagning av listan
>
> ### Output
>
> * Misslyckat meddelande om borttagning visas
> * Lista med ljudeffekter visas
> * "New playlist" listan är kvar
> * Användaren kan försöka igen

> ## Testfall 10.9 - Lyckad visning av vald spellista utan ljudeffekt
>
> ### Input
>
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på "New playlist"
>
> ### Output
>
> * "No sounds in playlist" meddelandet presenteras

> ## Testfall 10.10 - Lyckad visning av vald spellista med ljudeffekt
>
> ### Input
>
> * Testfall 5.1 - Lyckad uppladdning av ljudeffekt
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 7.1 - Lyckad navigering till specifik ljudeffekt - "Car engine"
> * Lägg till ljudeffekten "Car engine" i spellista - Tryck på (+) plusstecknet och välj "New playlist"
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på "New playlist"
>
> ### Output
>
> * Spellistan visas med ljudeffekten "Car engine"

> ## Testfall 11.1 - Lyckad tilläggning av ljudeffekt i spellista
>
> ### Input
>
> * Testfall 5.1 - Lyckad uppladdning av ljudeffekt
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 7.1 - Lyckad navigering till specifik ljudeffekt - "Car engine"
> * Lägg till ljudeffekten "Car engine" i spellista - Tryck på (+) plusstecknet och välj "New playlist"
>
> ### Output
>
> * Lyckat meddelande visas
> * Användaren stannar kvar på samma sida

> ## Testfall 11.2 - Misslyckad tilläggning av ljudeffekt i spellista
>
> ### Input
>
> * Testfall 5.1 - Lyckad uppladdning av ljudeffekt
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 7.1 - Lyckad navigering till specifik ljudeffekt - "Car engine"
> * Lägg till ljudeffekten "Car engine" i spellista - Tryck på (+) plusstecknet och välj "New playlist"
>
> ### Output
>
> * Felmeddelande visas
> * Användaren stannar kvar på samma sida
> * Användaren kan försöka igen

> ## Testfall 12.1 - Lyckad borttagning av ljudeffekt i spellista
>
> ### Input
>
> * Testfall 5.1 - Lyckad uppladdning av ljudeffekt
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 7.1 - Lyckad navigering till specifik ljudeffekt - "Car engine"
> * Lägg till ljudeffekten "Car engine" i spellista - Tryck på (+) plusstecknet och välj "New playlist"
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på "New playlist"
> * Tryck på (-) minustecknet på "Car engine" ljudeffekten
> * Godkänn borttagningen med "Yes, delete" knappen
>
> ### Output
>
> * Lyckat meddelande visas
> * Spellistan visas utan ljudeffekten "Car engine"

> ## Testfall 12.2 - Misslyckad borttagning av ljudeffekt i spellista
>
> ### Input
>
> * Testfall 5.1 - Lyckad uppladdning av ljudeffekt
> * Testfall 10.1 - Lyckad skapad spellista
> * Testfall 7.1 - Lyckad navigering till specifik ljudeffekt - "Car engine"
> * Lägg till ljudeffekten "Car engine" i spellista - Tryck på (+) plusstecknet och välj "New playlist"
> * Testfall 10.3 - Lyckad visning av skapade spellistor
> * Tryck på "New playlist"
> * Tryck på (-) minustecknet på "Car engine" ljudeffekten
> * Godkänn borttagningen med "Yes, delete" knappen
>
> ### Output
>
> * Felmeddelande visas
> * Spellistan visas med ljudeffekten "Car engine"
> * Användaren kan försöka igen