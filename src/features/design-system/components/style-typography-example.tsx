import { Badge } from "@/components/ui/badge";

export default function TypographyExample() {
  return (
    <>
      <h2>Fonts</h2>
      <div>
        <p className="font-sans">
          Roboto (Sans): 1 2 3 4 5 6 7 8 9 0 — Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk
          Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>

        <p className="font-serif">
          Roboto Serif: 1 2 3 4 5 6 7 8 9 0 — Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk
          Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>

        <p className="font-mono">
          Roboto Mono: 1 2 3 4 5 6 7 8 9 0 — Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll
          Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
        </p>
      </div>
      <h2>Type scale</h2>
      <TypeRow
        label="L"
        name="Display"
        className="text-display-large"
        emphasizedClassName="text-display-large-emphasized"
      />
      <TypeRow
        label="M"
        name="Display"
        className="text-display-medium"
        emphasizedClassName="text-display-medium-emphasized"
      />
      <TypeRow
        label="S"
        name="Display"
        className="text-display-small"
        emphasizedClassName="text-display-small-emphasized"
      />
      <TypeRow
        label="L"
        name="Headline"
        className="text-headline-large"
        emphasizedClassName="text-headline-large-emphasized"
      />
      <TypeRow
        label="M"
        name="Headline"
        className="text-headline-medium"
        emphasizedClassName="text-headline-medium-emphasized"
      />
      <TypeRow
        label="S"
        name="Headline"
        className="text-headline-small"
        emphasizedClassName="text-headline-small-emphasized"
      />
      <TypeRow
        label="L"
        name="Title"
        className="text-title-large"
        emphasizedClassName="text-title-large-emphasized"
      />
      <TypeRow
        label="M"
        name="Title"
        className="text-title-medium"
        emphasizedClassName="text-title-medium-emphasized"
      />
      <TypeRow
        label="S"
        name="Title"
        className="text-title-small"
        emphasizedClassName="text-title-small-emphasized"
      />
      <TypeRow
        label="L"
        name="Body"
        className="text-body-large"
        emphasizedClassName="text-body-large-emphasized"
      />
      <TypeRow
        label="M"
        name="Body"
        className="text-body-medium"
        emphasizedClassName="text-body-medium-emphasized"
      />
      <TypeRow
        label="S"
        name="Body"
        className="text-body-small"
        emphasizedClassName="text-body-small-emphasized"
      />
      <TypeRow
        label="L"
        name="Label"
        className="text-label-large"
        emphasizedClassName="text-label-large-emphasized"
      />
      <TypeRow
        label="M"
        name="Label"
        className="text-label-medium"
        emphasizedClassName="text-label-medium-emphasized"
      />
      <TypeRow
        label="S"
        name="Label"
        className="text-label-small"
        emphasizedClassName="text-label-small-emphasized"
      />
    </>
  );
}

function TypeRow({
  label,
  name,
  className,
  emphasizedClassName,
}: {
  label: string;
  name: string;
  className: string;
  emphasizedClassName: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Badge>{label}</Badge>
      <div className="flex items-center gap-x-4 flex-wrap">
        <p className={className}>{name}</p>
        <p className={emphasizedClassName}>{name}</p>
      </div>
    </div>
  );
}
