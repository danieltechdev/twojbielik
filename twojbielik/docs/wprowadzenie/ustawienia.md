---
sidebar_position: 3
---

# Ustawienia

## Podstawowe parametry w LLM Studio

1. **Temperatura (Temperature)**
   - **Opis:** Kontroluje poziom losowości w generowanym tekście. Wyższe wartości prowadzą do bardziej kreatywnych i zróżnicowanych wyników, podczas gdy niższe wartości skutkują bardziej przewidywalnymi odpowiedziami.
   - **Ustawienia:** Zwykle w zakresie od 0.0 do 1.0.

2. **Top P (Nuklearne próbkowanie)**
   - **Opis:** Określa zakres tokenów branych pod uwagę przy generowaniu kolejnych słów, opierając się na ich prawdopodobieństwie.
   - **Ustawienia:** Niższe wartości ograniczają wybór do najbardziej prawdopodobnych tokenów.

3. **Maksymalna długość (Max Tokens)**
   - **Opis:** Ustawia maksymalną liczbę tokenów, które model może wygenerować w jednej odpowiedzi.
   - **Ustawienia:** Dostosuj tę wartość, aby kontrolować długość generowanego tekstu.

4. **Kary za częstotliwość i obecność (Frequency and Presence Penalty)**
   - **Opis:** Te parametry kontrolują, jak często model używa tych samych słów. Kary za częstotliwość zmniejszają prawdopodobieństwo ponownego użycia często występujących tokenów, a kary za obecność penalizują użycie tokenów, które już się pojawiły.
   - **Ustawienia:** Zwykle w zakresie od 0.0 do 1.0.