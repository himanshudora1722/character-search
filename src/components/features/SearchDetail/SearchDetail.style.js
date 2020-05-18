import { css } from 'styled-components';

export default css`
  &.o-searchDetail {
    color: ${props => props.theme.colors.secondary};
    padding: 0 ${props => props.theme.padding.p15}px;

    .character-block {
      padding: ${props => props.theme.padding.p15}px;
      position: relative;
    }

    .search-sort-section {
      color: ${props => props.theme.colors.primary};
      margin-bottom: ${props => props.theme.padding.p20}px;

      .search-label {
        font-size: ${props => props.theme.font.f20};
      }
      
      .search-input {
        margin-top: ${props => props.theme.padding.p10}px;
        width: 50%;
        height: 35px;
        border-color: ${props => props.theme.colors.tertiary};
      }

      .search-button {
        width: 20%;
        min-width: 50px;
        height: 41px;
        font-size: ${props => props.theme.font.f10};
        margin-left: 10%;
        border-radius: 10px;
        background: ${props => props.theme.colors.gray};

        @media only screen and (min-width: 1025px)  {
          font-size: ${props => props.theme.font.f16};
        }
      }

      .mt30 {
        margin-top: ${props => props.theme.padding.p30}px;
      }

      .relative {
        position: relative;
      }

      .sort {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
        height: 40px;
        min-width: 80px;
        border: 1px solid ${props => props.theme.colors.tertiary};
      }

      .pl-0 {
        padding-left: 0;
      }
    }

    .items {
      background-color: ${props => props.theme.colors.primary};
    }

    .character-detail {
      background: ${props => props.theme.colors.lightgray};
      margin-top: -4px;
      padding: ${props => props.theme.padding.p15}px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      min-height: 300px;
    }

    .character-name {
      position: absolute;
      background: ${props => props.theme.colors.primary};
      opacity: 0.6;
      padding: ${props => props.theme.padding.p5}px ${props => props.theme.padding.p10}px;
      font-size: ${props => props.theme.font.f14};
      top: 291px;

      @media only screen and (min-width: 768px)  {
        top: 274px
      }

      @media only screen and (min-width: 1025px)  {
        padding: ${props => props.theme.padding.p10}px;
        font-size: ${props => props.theme.font.f24};
        top: 259px;
      }
    }

    .label-size {
      font-size: ${props => props.theme.font.f10};

      @media only screen and (min-width: 768px)  {
        font-size: ${props => props.theme.font.f14};
      }
    }

    .full-image {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      min-height: 320px;
    }

    .details {
      text-transform: uppercase;
    }

    .value {
      right: 36px;
    }

    .wrap {
      font-size: ${props => props.theme.font.f6};
      border-bottom: 1px solid ${props => props.theme.colors.primarygray};
      padding: 12px 0;
      margin: 0;

      &:last-child {
        border: none;
      }


      @media only screen and (min-width: 769px) {
        font-size: ${props => props.theme.font.f10};
      }

      @media only screen and (min-width: 1025px)  {
        font-size: ${props => props.theme.font.f14};
      }
    }

    .align-right {
      text-align: right;
      color: ${props => props.theme.colors.secondarygray};
    }

    .adjust-padding-right {
      padding-right: 0;
    }

    .adjust-padding-left {
      padding-left: 0;
    }

    .darkgray {
      color: ${props => props.theme.colors.darkgray};
    }

    .fc-black {
      color: ${props => props.theme.colors.primary};
    }

    .filter-border {
      border: 1px solid ${props => props.theme.colors.primary};
      font-size: ${props => props.theme.font.f20};
      line-height: 1.5;
      padding: ${props => props.theme.padding.p10}px;
      max-width: 50%;
      margin: 25px 0;

      .truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .search-checkbox {
        margin-left: ${props => props.theme.padding.p10}px;
      }
    }

    .filter-keys {
      font-weight: 800;
      text-transform: capitalize;
      font-size: ${props => props.theme.font.f24};
    }
  }
`;
