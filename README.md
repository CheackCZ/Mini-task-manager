## Mini Task Manager

Jednoduchá React aplikace pro správu úkolů s využitím veřejného API pro získávání uživatelů. Umožňuje přidávat nové úkoly, zobrazovat jejich seznam, detail každého úkolu a přiřazovat úkoly uživatelům.

### Použité technologie
- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v6](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [MUI (Material UI)](https://mui.com/)
- [Day.js](https://day.js.org/) – pro práci s datem

### Struktura složek
```
src/
├── components/
│   ├── AddTaskDialog.tsx
│   ├── AddTaskForm.tsx
│   ├── FloatingActionButton.tsx
│   ├── Navbar.tsx
│   ├── TaskCard.tsx
│   └── TaskList.tsx
│
├── pages/
│   ├── HomePage.tsx
│   └── TaskPage.tsx
│
├── types/
│   ├── Address.ts
│   ├── Company.ts
│   ├── Geo.ts
│   ├── Task.ts
│   └── User.ts
│
├── theme.ts
├── App.tsx
```

### Spuštění aplikace
```bash
npm install / npm i
npm run dev
```

### Možnosti pro rozšíření
- Trvalé ukládání úkolů (namísto smazání po každém obnovení aplikace) do souborů nebo databáze.
- Možnost upráv a mazání úkolů.
- Přidání autentifikace a zároveň by každý uživatel viděl pouze svoje úkoly po přihlášení k účtu. (Lepší řešení než že na hlavní stránce jsou všechny úkoly a každý vidí a může pracovat s úkoly jiných uživatelů).
- Filtrování úkolů podle atributů.

### Autor
**Ondřej Faltin**<br>
*Student, SPŠE Ječná*<br>
✉️ Email: ondra.faltin@gmail.com / faltin@spsejecna.cz<br>
🖥️ Web: ondrejfaltin.cz