<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared stylesheet hints and font loading in the root head; load Google Fonts with print media, a pre-head load listener, and a noscript stylesheet fallback so fonts do not block first paint.
- Define social image metadata only on leaf routes using absolute public-domain URLs to CDN-hosted 1200×630 renditions of existing page imagery; preserve the visible originals.
