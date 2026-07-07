import { useState } from 'react';
import { TabsRoot, TabsList, TabsTrigger } from '@universe-forma/ui-pes';
import { CardWithScore, CardResumeReady } from './components/PreviewCards';
import { PaymentPanel } from './components/PaymentPanel';
import { Reviews } from './components/Reviews';

type PreviewVersion = 'score' | 'ready';

export default function App() {
  const [version, setVersion] = useState<PreviewVersion>('score');

  return (
    <>
      <div className="demo-bar">
        <TabsRoot value={version} onValueChange={(v) => setVersion(v as PreviewVersion)} color="primary" size="sm" transparent={false} scrollable={false}>
          <TabsList aria-label="Preview version" className="!w-auto shadow-[0_1px_3px_rgba(0,0,0,.08)]">
            <TabsTrigger value="score">With score</TabsTrigger>
            <TabsTrigger value="ready">Resume ready</TabsTrigger>
          </TabsList>
        </TabsRoot>
      </div>

      <div className="page">
        <header className="site-header">
          <img src="/assets/logo.svg" width={196} height={32} alt="ResumeLeader" />
        </header>

        <main className="hero">
          <h1>Start your 7-day free trial and download file instantly</h1>
          <p className="sub">You're one step closer to getting your dream job!</p>

          <div className="plans">
            {version === 'score' ? <CardWithScore /> : <CardResumeReady />}
            <PaymentPanel />
          </div>
        </main>

        <Reviews />
      </div>
    </>
  );
}
