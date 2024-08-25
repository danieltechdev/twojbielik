---
title: Sprawdzenie parametrów urządzenia
description: Jak sprawdzic czy spełniasz wymygania sprzętowe
hide_table_of_contents: true
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sprawdzanie wielkości karty graficznej i ilości pamięci RAM


<Tabs>

  <TabItem value="Windows" label="Windows">
  
## Windows

### Sprawdzanie pamięci RAM

1. Naciśnij kombinację klawiszy **Windows + R**, aby otworzyć okno "Uruchom".
2. Wpisz `msinfo32` i naciśnij Enter.
3. W oknie "Informacje o systemie" znajdź pozycję "Zainstalowana pamięć fizyczna (RAM)".

### Sprawdzanie wielkości karty graficznej

1. Naciśnij kombinację klawiszy **Windows + R**, aby otworzyć okno "Uruchom".
2. Wpisz `dxdiag` i naciśnij Enter.
3. W oknie "Narzędzie diagnostyczne DirectX" przejdź do zakładki "Ekran".
4. Znajdź informację o pamięci karty graficznej w sekcji "Pamięć karty".

</TabItem>
  <TabItem value="macos" label="MacOs">

## MacOS

### Sprawdzanie pamięci RAM

1. Kliknij ikonę Apple w lewym górnym rogu ekranu.
2. Wybierz "O tym Macu".
3. W oknie informacji o systemie znajdź pozycję "Pamięć".

### Sprawdzanie wielkości karty graficznej

1. Kliknij ikonę Apple w lewym górnym rogu ekranu.
2. Wybierz "O tym Macu".
3. Kliknij "Raport systemowy".
4. W lewym panelu wybierz "Grafika/Monitory".
5. Znajdź informację o pamięci karty graficznej w sekcji "Karta graficzna".


</TabItem>
 <TabItem value="linux" label="Linux">

## Linux

### Sprawdzanie pamięci RAM

1. Otwórz terminal.
2. Wpisz komendę `free -h` i naciśnij Enter.
3. Sprawdź wartość w kolumnie "total" w wierszu "Mem".

### Sprawdzanie wielkości karty graficznej

1. Otwórz terminal.
2. Dla kart NVIDIA, wpisz `nvidia-smi` i naciśnij Enter.
3. Dla kart AMD, wpisz `sudo lshw -C display` i naciśnij Enter.
4. Dla kart Intel, wpisz `sudo lspci -v | grep -A 12 VGA` i naciśnij Enter.
5. Znajdź informację o pamięci karty graficznej w wyświetlonych danych.

**Uwaga**: W przypadku Linuxa, dokładne polecenia mogą się różnić w zależności od dystrybucji i zainstalowanych sterowników.

</TabItem>
</Tabs>



