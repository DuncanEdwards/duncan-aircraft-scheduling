import { FC } from 'react';
import { Box, Button, Flex } from 'theme-ui';

export const FlightPager: FC<{
    page: number;
    pageSize: number;
    totalCount: number;
    setCurrentPage: (page: number) => void;
}> = ({ page, pageSize, totalCount, setCurrentPage }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    return (
        <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Button disabled={page === 1} sx={{ p: 2, ml: 2, pb: 1 }} onClick={() => setCurrentPage(page - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 448 512">
                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                </svg>
            </Button>
            <Box sx={{ p: 3, fontSize: 1 }}>
                {totalCount === 0 && `No flights found`}
                {totalCount > 0 && `Page ${page} of ${pagesCount}`}
            </Box>
            <Button
                disabled={page === pagesCount || totalCount === 0}
                sx={{ p: 2, mr: 2, pb: 1 }}
                onClick={() => setCurrentPage(page + 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 448 512">
                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </Button>
        </Flex>
    );
};
