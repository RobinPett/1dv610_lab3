# UC1 - Navigering

> ## Testfall 1.1
>
> ### Input
>
> Navigera till webbapplikationen
>
> ### Output
>
> Webbapplikationens startsida visas med en uppladdningsikon.

# UC2 - Uppladdning av bild

> ## Testfall 2.1 - Lyckad uppladdning via filväljare
>
> ### Input
>
> * Testfall 1.1 - Navigera till webapp
> * Tryck på Uppladdningsikonen
> * Välj en bildfil
>
> ### Output
>
> * Bilden visas på sidan
>
> ## Testfall 2.2 - Misslyckad uppladdning via filväljare
>
> ### Input
>
> * Testfall 1.1 - Navigera till webapp
> * Tryck på Uppladdningsikonen
> * Välj en icke-bildfil
>
> ### Output
>
> * Ett Error meddelande visas
> * Användaren kan försöka igen
>
> ## Testfall 2.3 - Lyckad uppladdning via drag & drop
>
> ### Input
>
> * Testfall 1.1 - Navigera till webapp
> * Drag och släpp en bildfil på Uppladdningsikonen
>
> ### Output
>
> * Bilden visas på sidan
>
> ## Testfall 2.4 - Misslyckad uppladdning via drag & drop
>
> ### Input
>
> * Testfall 1.1 - Navigera till webapp
> * Drag och släpp en icke-bildfil på Uppladdningsikonen
>
> ### Output
>
> * Ett Error meddelande visas
> * Användaren kan försöka igen
>


# UC3 - Visning av färgpalett

> ## Testfall 3.1 - Lyckad visning
>
> ### Input
>
> * Testfall 2.1 eller Testfall 2.3 - Lyckad bild uppladdning
>
> ### Output
>
> * En färgpalett med 5 färger visas
> * Under paletten syns en spara knapp


> ## Testfall 3.2 - Misslyckad visning
>
> ### Input
>
> * Testfall 2.1 eller Testfall 2.3 - Lyckad bild uppladdning
>
> ### Output
>  
> * Bilden visas på sidan
> * Ingen färgpalett visas
> * Ett Error meddelande visas 


# UC4 - Kopiera HEX värden

> ## Testfall 4.1 - Lyckad visning av HEX värde
>
> ### Input
>
> * Testfall 3.1 - Lyckad visning av färgpalett
>
> ### Output
>
> * Knappar med hex värden visas under färgen

> ## Testfall 4.2 - Lyckad kopiering av HEX vörde
>
> ### Input
>
> * Testfall 4.1 - Lyckad visning av HEX värde
> * Tryck på första knappen med hex värde
>
> ### Output
>
> * Info meddelande visar att kopiering lyckades
> * HEX värdet ligger i urklipp och kan klistras in - ctrl + v

# UC5 - Nedladdning av färgpalett

> ## Testfall 5.1 - Lyckad sparning av färgpalett
>
> ### Input
>
> * Testdall 3.1 - Lyckad visning av färgpalett
> * Tryck på "Spara" knappen
>
> ### Output
>
> * Paletten sparas ned som en bild - palette.png