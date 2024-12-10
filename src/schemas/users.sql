create table
  public.users (
    id text not null,
    type text null default 'users'::text,
    title text null,
    description text null,
    position bigint null default '1'::bigint,
    status text null default 'active'::text,
    "dateCreate" text null,
    projects jsonb null default '[]'::jsonb,
    user_id uuid null,
    premium boolean null default false,
    subscription boolean null default false,
    "dateStartPremium" text null,
    "dateEndPremium" text null,
    constraint users_pkey primary key (id)
  ) tablespace pg_default;