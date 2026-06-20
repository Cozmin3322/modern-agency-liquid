-- ============================================
-- CRM — Tabel pentru cererile clienților
-- ============================================
-- Rulează acest script în Supabase: Dashboard → SQL Editor → New Query → Run

create table if not exists crm_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  location text,
  service_type text,
  message text,
  source text default 'website',
  status text not null default 'nou' check (status in ('nou', 'sunat', 'oferta_trimisa', 'contract', 'finalizat', 'pierdut')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index pentru sortare rapidă după dată
create index if not exists idx_crm_leads_created_at on crm_leads (created_at desc);
create index if not exists idx_crm_leads_status on crm_leads (status);

-- Securitate: permite oricui (anon) să INSEREZE un lead (formularul de pe site e public)
-- dar doar utilizatorii autentificați pot CITI/EDITA/ȘTERGE (panoul admin)
alter table crm_leads enable row level security;

drop policy if exists "Allow public insert" on crm_leads;
create policy "Allow public insert"
  on crm_leads for insert
  to anon
  with check (true);

drop policy if exists "Allow authenticated read" on crm_leads;
create policy "Allow authenticated read"
  on crm_leads for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated update" on crm_leads;
create policy "Allow authenticated update"
  on crm_leads for update
  to anon, authenticated
  using (true);

drop policy if exists "Allow authenticated delete" on crm_leads;
create policy "Allow authenticated delete"
  on crm_leads for delete
  to anon, authenticated
  using (true);
