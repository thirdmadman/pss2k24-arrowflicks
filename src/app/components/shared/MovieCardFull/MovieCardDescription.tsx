import { getColor } from '@/theme/theme';
import { Divider, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';

interface IProductionCompany {
  name: string;
  imageLink: string | undefined;
}

interface IMovieCardDescriptionProps {
  trailerLink: string;
  description: string;
  productionList: Array<IProductionCompany>;
}

const getStudioCard = (studioName: string, studioLogoImage: string | undefined) => {
  return (
    <Group key={studioName} gap="8px">
      <Image
        src={studioLogoImage ?? 'images/no-poster-placeholder.svg'}
        alt={studioName}
        width={40}
        height={40}
        style={{
          objectFit: 'cover',
          borderRadius: '100%',
          border: `1px solid ${getColor('grey', 1)}`,
        }}
      ></Image>
      <Text size="16px" lh="22px" fw="bold">
        {studioName}
      </Text>
    </Group>
  );
};

export function MovieCardDescription(props: IMovieCardDescriptionProps) {
  const { trailerLink, description, productionList } = props;

  return (
    <Paper p="24px" radius="12px" maw={800} w="100%" c="black">
      <Stack gap={0}>
        <Stack>
          <Title order={2} size="20px" lh="20px" fw="bold">
            Trailer
          </Title>
          <iframe
            width="500"
            height="281"
            src={trailerLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              borderRadius: '9px',
            }}
          ></iframe>
        </Stack>
        <Divider my="20px" />
        <Stack>
          <Title order={2} size="20px" lh="20px" fw="bold">
            Description
          </Title>
          <Text size="16px" lh="22px">
            {description}
          </Text>
        </Stack>
        <Divider my="20px" />
        <Stack>
          <Title order={2} size="20px" lh="20px" fw="bold">
            Production
          </Title>
          <Stack gap="12px">{productionList.map((el) => getStudioCard(el.name, el.imageLink))}</Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
