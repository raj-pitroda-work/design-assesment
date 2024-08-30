import React from "react";
import EmojiCard from "./EmojiCard";

const MainBanner = () => {
  return (
    <div className="mainBanner">
      <img
        src="https://s3-alpha-sig.figma.com/img/cfb8/e85d/0ec01d131120d04ed61876a84c88c188?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPwuqT5dMHwKcDlduhmHOMTUgBHESBJfah9nJBBaTDgRhrli7CUbWpMl~2GHTVa4ylL9uB2phdhmDBigo155jf-FeLLHqe19qJsVgWSdxSnmbCK24GNOwP~u9jxBTsrbgLEO1zcXysaVwCl7Det-e2umJlDqWl3seIZMvPwRJhCD4QqV5RXD9oaVVu9BSxRyMSkE~0MN0NcL29NdBza71QykIrqtG50ETcjgxqEsCsS0~1oZoUhQr6QWQVWIvbjIE4cgXB2y43-a-nKKQPYBoE96kVu3~OlvGWUeSx3v~WVcQFO8-mG~79CJmYFY3DXeW6wtkYyyblfemJ8hXDl-BA__"
        className="bannerImg"
        alt="bannerBgImg"
      />
      <div className="bannerInfo">
        <div className="subInfo">
          Buy.ca helps boost your down payment with a portion commission.
        </div>
        <div className="mainInfoWrapper">
          <div className="mainInfo">
            Discover a Smarter Way to Buy Your Home
          </div>
          <div className="note text-center">
            Purchasing your home is now more affordable, efficient, and
            hassle-free than ever! Let our commissions serve as your down
            payment—no repayment required, no equity involved. Enjoy thousands
            of dollars in contributions towards your down payment!
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-14">
        <div className="flex flex-col justify-end gap-14 items-end">
          <EmojiCard />
          <EmojiCard />
        </div>
        <div className="gridImg">
          <img
            src="https://s3-alpha-sig.figma.com/img/eb1c/c9d3/5c7355031f6c72dac1037446e4f4b885?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZ-69gSsKQTef9q7z7gn4yfFn6J63oaUpLvX9yfXUKlDLPvBX~eJgL3nH-oBiZgqJ3YCqMB~zK1kOwvKyO7vJhkj0hb68QLWvCOd1ZoZ0DC6d65Boe3Aw9myLCIds2-9Rc28Z-yY2bx~wz0rNBrJNjZoxx2lvFISlhSOpWOFKQX51JYTyv8O7Ch~xXlSVnG32d5Or5B9KbbQJJ~hbUdw0vGJLBmv6CLQuC~LdbCbarBG1zTKhzTlAC7zoZ886jr3vwOWpNKoGbVFoyL2Zozw6Es4b8dWE0y9GOtW8XFipwoO1gCGqTFqlRXi~k8rNLG6pzXN2zTw3Z8In1EiedBT2w__"
            alt="img.png"
            className="object-fill h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-end gap-14">
          <EmojiCard />
          <EmojiCard />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
