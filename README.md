# poipoi

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A gamified web application to encourage and educate users on proper garbage separation in Sabae City, Fukui. Users can look up separation rules, upload photos of their items, and participate in quizzes.

## Demo

- **Live App:** [https://poipoi.life/](https://poipoi.life/)
- **VR180 Video:** [static/movie/index.html](static/movie/index.html)

## Features

-   **Garbage Separation Guide:** An interactive list to look up how to dispose of different items based on official city data.
-   **Photo Upload:** Submit photos of items to be sorted, triggering celebratory sounds and confetti animations upon success.
-   **Timeline & Quiz:** View a timeline of recently submitted items and test your knowledge with a separation quiz for each item.
-   **Gamification:** A "My Page" section displays mock "Poi-katsu" (point activity) points to engage users.
-   **City Dashboard:** A mock dashboard shows the city's monthly resource income and a map of collection truck locations.

## Tech Stack

-   **Runtime:** [Deno](https://deno.land/)
-   **Backend:** A simple API server built with vanilla Deno and utility modules from `js.sabae.cc`.
-   **Frontend:** Vanilla JavaScript (ES Modules), HTML5, and CSS.
-   **Database:** A flat-file JSON database for storing item submissions.

## Usage

1.  **Install Deno:** Follow the instructions on the [official Deno website](https://deno.land/#installation).
2.  **Run the application:**
    ```sh
    deno run -A poipoi.js 8000
    ```
3.  Open [http://localhost:8000](http://localhost:8000) in your web browser.

## Data Source

This application uses open data provided by Sabae City.

-   [ゴミの分別(福井県鯖江市) - データセット - オープンデータプラットフォーム | データカタログサイト](https://ckan.odp.jig.jp/dataset/jp-fukui-sabae-203-odp)

## Acknowledgements

-   The confetti and firework animation is based on [紙吹雪＆花火演出 by ちりつも](https://github.com/haruyuki-16278/chiritsumo) and uses [confetti-es](https://github.com/code4fukui/confetti-es/).
