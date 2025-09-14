/*
  Workaround for @react-email/components resolving @react-email/render from a nested path.
  Ensures a nested copy (symlink) exists at
  node_modules/@react-email/components/node_modules/@react-email/render
  pointing to the hoisted package.
*/
const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  try {
    const root = process.cwd();
    const hoisted = path.join(root, 'node_modules', '@react-email', 'render');
    const nestedBase = path.join(root, 'node_modules', '@react-email', 'components', 'node_modules', '@react-email');
    const nested = path.join(nestedBase, 'render');

    if (!fs.existsSync(hoisted)) {
      // Hoisted package not installed; nothing to do.
      return;
    }

    // If nested already resolves correctly, skip
    try {
      if (fs.existsSync(nested)) {
        return;
      }
    } catch (_) {}

    ensureDir(nestedBase);

    // Create symlink from nested -> hoisted
    try {
      fs.symlinkSync(path.relative(nestedBase, hoisted), nested, 'dir');
      // eslint-disable-next-line no-console
      console.log('[postinstall] Linked', nested, '->', hoisted);
    } catch (e) {
      // Fallback: copy directory if symlink fails
      // eslint-disable-next-line no-console
      console.warn('[postinstall] symlink failed, copying instead:', e.message);
      copyDir(hoisted, nested);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[postinstall] React Email render link workaround skipped:', err.message);
  }
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src)) {
    const s = path.join(src, entry);
    const d = path.join(dest, entry);
    const stat = fs.lstatSync(s);
    if (stat.isDirectory()) copyDir(s, d);
    else if (stat.isSymbolicLink()) fs.symlinkSync(fs.readlinkSync(s), d);
    else fs.copyFileSync(s, d);
  }
}

main();

