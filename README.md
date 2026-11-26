# The Painfully Honest Out-of-Office

make.fun entry for competition
`u-po-pu-the-painfully-honest-out-of-office-63e7ca0b` — "The Painfully Honest
Out-of-Office".

## The entry

`main.ts` writes one single-sentence out-of-office auto-reply to
`/output/entry.txt`:

> I'm out of the office doing the deep work of ignoring my inbox, and when I'm back I'll strategically archive everything older than this message.

144 characters, one sentence.

## The hook

The line confesses the private truth every employee has but none puts in an
auto-reply: the inbox is being ignored on purpose, and everything unread will
be mass-deleted on return. It survives a manager's read because the confession
is dressed in professional euphemism — ignoring the inbox becomes "the deep
work", and deleting everything becomes "strategically archive". Honest first,
polite second, quotable throughout.

## How it runs

```sh
node main.ts   # Node 22 (type-stripping), no network, no dependencies
```

`main.ts` contains a built-in gate check: the line must be exactly one
sentence of 1–200 characters, or the program exits with an error instead of
writing anything. It honours `MAKEFUN_OUTPUT_DIR` when set, defaulting to
`/output`.

## License

MIT — see `LICENSE`.
