# MSC - NU Laguna's Design System (shadcn/ui registry)

Official component registry for [Microsoft Student Community – NU Laguna](https://www.facebook.com/mscnulaguna).

## 🛠️ Development workflow

```
git clone https://github.com/mscnulaguna/design-system.git
cd design-system
npm install
npm run dev
```

## Edit globals.css or registry/ui/*.tsx
```
npm run registry:build   # Regenerates public/r/*.json
git add public/r/
git commit -m "feat: update [component]/theme"
git push
```

## 📱 MDK (Figma)

Access the MDK [here](https://www.figma.com/design/95hTkIHIOkXVIpCZnPF0FA/MSC---NU-Laguna-%7C-Material-Design-Kit?node-id=0-1&t=w2WgM2W7bvDJKhYl-1).

## 🏗️ How it works

1. registry.json defines what gets published
2. registry/ui/ contains our component source code
3. npm run registry:build → generates public/r/*.json
4. shadcn CLI downloads JSON → writes TypeScript files
5. Our theme (globals.css) gets embedded in each install

## 📄 License

MIT License — Free for all MSC-NU Laguna projects and members.