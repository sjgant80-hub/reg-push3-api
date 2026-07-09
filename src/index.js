// reg-push3-api · Express HTTP wrapper around reg-push3-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'reg-push3', version: '1.0.0' }));

app.post('/loadRegistry', async (req, res) => {
  try {
    const { loadRegistry } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof loadRegistry === 'function' ? await loadRegistry(req.body) : { error: 'loadRegistry not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/renderChips', async (req, res) => {
  try {
    const { renderChips } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof renderChips === 'function' ? await renderChips(req.body) : { error: 'renderChips not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/matchesQuery', async (req, res) => {
  try {
    const { matchesQuery } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof matchesQuery === 'function' ? await matchesQuery(req.body) : { error: 'matchesQuery not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/card', async (req, res) => {
  try {
    const { card } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof card === 'function' ? await card(req.body) : { error: 'card not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/escapeHtml', async (req, res) => {
  try {
    const { escapeHtml } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof escapeHtml === 'function' ? await escapeHtml(req.body) : { error: 'escapeHtml not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/escapeAttr', async (req, res) => {
  try {
    const { escapeAttr } = await import('@ai-native-solutions/reg-push3-sdk');
    const out = typeof escapeAttr === 'function' ? await escapeAttr(req.body) : { error: 'escapeAttr not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('reg-push3-api listening on :' + PORT));
