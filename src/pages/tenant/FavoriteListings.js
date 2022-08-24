import { Box, Grid, Typography } from '@mui/material'
import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import FavListingCard from '../../components/FavListingCard'
import { UserContext } from '../../context/UserContext'
import { apilink } from '../../Helper'

const FavoriteListings = () => {
    const dumylisting = [{
        "id": 1,
        "amount": "$4.86",
        "property_type": "House",
        "bedroom": 1,
        "bathroom": 1,
        "region": "Accra",
        "location": "Dome",
        "bookmark": 0,
        "favorite": 1,
        "image1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKkSURBVDjLjZLfS5pRGMf7N3bxslsvtsWuJBi0i4UNRrtYIeIumuwHbAgvXa0mMWGjMDebmSzTQtNuXGZLZr5ZXRQUJjm1jWmGhT9Wr/1UQnQX351zNkbt3cUOPBzO4Xk+z/f5ntMAoOF87O/vc6VSiSd7sFAoiLu7u2ImkwkmEgl+eXmZ+zv/wmFvb6+JFPqPjo5wfHyM09NTHB4eolgsIp1OIxwO+30+X9M/ASSJI+GnRWdnZ6CQxcVFCIKAnZ0d5HI5BhkbG/NbrVZOAiBSeVEUUS6XWXcKqdd/oFavMxW0OJvNIhQKobe3l5cAUqlUkCZSSKVSQXQzC8uoB0M2NyLxDMhoSCaTiMVi0Gq1QQmAmCQeHBwwqbSrZdQNVygN53wBVv83VKtVbGxsMCUajUaUANbW1kRiIra3t1Gr1WAeccMeymNkroTBme8MsL6+jmg0CqVSKQUQw4JbW1usAx0jGk/j3YcvMPhySKaKyOfzDDA1NYW2tjbpCOR56DszwPT0NOLxOE5OTpihVPrk5CRWV1eh0+mgUCikJtrtds5sNs8tLCxgdnYWTqcT5A42m43tA46X4C1qPH57F6pXNyu3n1/TXQB4PJ52h8MR0+v1fgqIRCJYWlpif+G91wi99wECm8P4XBRgmn8Kpekq5M8uGVmx2+1uJ1EbHx9HV1cXp1KpoFar0draipaWFtx/fQszyUHMfDWDLmP4EUzhJxRQZQCXy8Xmo7ObTCYYDAZYLBb09PSA53nceXEdnzbtOL8+JoYp4Jd8Oic1jbq8srJC/zwCgQC8Xi8mJiZwQ3sZA4IGfUInK+4LdV5U0N3djY6ODvo81GE0NzdDLpejsbERMpkMVxQc7hlleCM8ZJ3pTs9/PPifIMn9JMpU9u+9n97/BG848JbqijsUAAAAAElFTkSuQmCC",
        "image2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLdZI/aNNBFMc/vySSpLZFg5QguvgHcXHTImQu6OQq6CDoIDjoIpk6dLHgKA7iIOjgotjNLqJCKXQpooMOFSlWGpRGU/NLLnf33nNIQtKmPvjyOO7e57537yVmRj9uvblmF09fYLW+jJgiKj0pUSNnD1V4svCUxTvvkn5NjqGIIaLWPSwqRNVeHsj7OFyyC+AjZhBEhiBdqWp3rxN2ADLDi+AjecbIZwoEiXgJeAkEieSzRYo2TvDh/w6Cj3P19fezV/OfKYV1CuZQNZqa5Zce5u0nJfg491/As2MfNlrxY7M4dXucsVMYGRJtMxkajG9/4WD9QfPyebcxXJP0uxCXj0xjLHDiYdmyk2isQ/yLSYqJgyQBCTRXqzXxXCpfsZUdf2ASqhy9W7bcASz+AWlj4npK0c5PTFMKJ2+WwzbVkSdo9JXs/jNY3MbU9dTpyWHaQsNvMmNThJTKSBdUpWSZHKZt0E5PbiBxIE2wQPSURgGiYBHUD6z3b5eBI6xD9HvMgUapW2hgFnZZdwMIivgWoU19FBDckmytkCTZnfally2QyRRpb36n1WBpBCCO+ebqvZq6LcgWMIuY9JygJLkJokv4+vJ1rZ0yPzIHAJuPkhsSmJs4d728r3QcEsNiivgG6Y811p4v1topszMv7PGeAIBv95Np36AaHRWJlEIHXIu6S1kSYX7mVXeA+vEP7PyqQia3ZfwAAAAASUVORK5CYII=",
        "image3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHiSURBVDjLzZPdS5NRHMf3Fwy67yYqepnzrSgJetEyl8s0GqvYEHLDFiGr4VwQZTcOpzfeVgQiCIJ4IWJUN+WNUhQqqAVjpg0c4vY8p7l89uLzfDpbV0FE4Y0HPpff7znf3+97TIBpJ5h2h4HxoNMlSUlEET0YEHrAL7Y77orCndsi7/WIXGuryN64KbRrDrF1uTmZuXjJXTKQAqckw+tXMD0N8/MQjcLSEvq7tySHh1GGhkgPDqI+fUZ8YID44242z5zPpGtONxcNPvLiOUxMwOgoLC7C3ByMjaEHg8R9Pta8XhSPhw23m09NTXzp7SXqv4+oOhkvGlQYXYEPRiQM8jZWVymdqSl0h4M1u531xka+S5br6vjc08Oytx1RcSKhHqlylmYg8+6ReV/qT7phfBwSCZidxXC5SEqhKk1Um41YOMzXW15E+fGYcriy8rctFHzt5nxb2+R2KAQzM7CwgCGfLurryTQ0sNHXx4oUq2XHYsqhcusf15h1uc2a8/pkviv0y0DOIFNbS7a/n28dflRL9bpy0Gr9aw+2rrSYf9jsb3IPH2GMjFCIRFDuBZB5NeVAWcs/FWnz3IW96VNno7lAJ5oUy7xaar/F+V9NFNU1Fpn3vcy7ktp39Oou/ws74Sc149q/X6rjygAAAABJRU5ErkJggg==",
        "image4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH4SURBVDjLpZPJiiJBEIb7oeqd6qQgoiNaavoCIgqKoBcvih48eBJE8iCKIOKWLgcP7mup5YKiYnRG0l2OdNPNMAlBlZn+X/wRkfUGAG//E182er2e1O12SafToe12W2WMqc1mkzYaDVKr1aQfAVwsczFbrVZwOp3gfr+LOB6PMJ/PoVqtskqlIn8L+BBrl8sFcOFzv9+DpmlwPp/FHkLL5bJWKpXkF8CHbfYp3m63sFgsQFVVEev1GqbTqQ6hlLJ8Pi/pAF4vQdt/i51O54tYURSxj6vf70MmkyE6gDeLIhmtYq1W6x8BQOhkMgGj0SgAeIb92Gw2kEqlqA5otVoqNgsPLBYLD6sQYGaDwcDDCA6HQ/xGF9frFeLxuKoD+JgEYLfbgdtNwGw2CwACbTYbmEwmsNvtws2ni1gs9gTU63WKHccylssluFxuXoILZrOZECBMUZwwHo/FZAaDAUSj0WcJfL4EDx+PhxCgTY/HIzJioHVCCAyHQ7jdblAsFiEcDj+byOcqFQoFhiXgQhFmR+hoNBJCfGICfOdixkN6uUi5XE7OZrMajg3/eDgchBsE4WXCzGidC7VAICB/e5XT6bScTCYZL0nYxp5gzTh3fnmAC5nP55N//JgSiYQUiURIKBSiwWBQ9fv9KhdRr9dL+Lv069f4r/EO4RAxpm00KCQAAAAASUVORK5CYII=",
        "image5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIxSURBVDjLpZNLiM5hFMZ/33+GPsMwI5SFcakxI9QIuZcyCyVKdpMdK9vJbcVOsrexEJGFUpRSiA3FjGsoU+65DZLxff/3dt5zLD5pyqQpp06nzuJ3nufUUzEz/qeax1oeOPfFsipRIGclihJEObVnTmVcgBCV9d0tiCpqINm4ODgyfgUuKTErX34IKRvTJjVRczp+QN0JURSfFMlGaC746WRsgB3c2/iiKpYES0I5fz8hGj4ZSZTqhMyIz/9QsKkXVKnkTCVnfj5SghguZFKGrsmPOLrqKi+vvZ+1oPfM8GhAYUlABAYHYOAOiFBzEZ+UMipZShY3X2Z1z0o0pX1/WwiRiggED0kgCT+CEZLigrK69SZz5q1g6uxlvHt6rv/Q5b7+d6IknwghUagPDQU+gPcQI7W64qMxxT6yrHqD1hlt5JFLdCzdxRba2bagj62LduLrnkLd78vhN0AEcYmYMiurV+hYsh38fe6ePsuUNsfE4ed8enGdKAFX9xRaNq7iXAOQElpXZuQnrOmItLaXaHgFpuTaAPM39tM5/Izkaw0FVrpRFhp2ipDo0fO0dfSg5WNMHct3dKHxA9XqEJ3d25j2dhBXBgotHaQEa9fB+g0gwubZt+juXExL61dMvkGliXsXhgBF/RAzF86l/c0DpsdI5XDvEdMkWBAsZSxl1vXdZ+Pu4zQVrzH5DoxObEHTpC4+P33ImZMnqIwV59vHln+1rC2mhqmOavszUcXM7v0CRRWCf6vfaXAAAAAASUVORK5CYII="
    }, {
        "id": 2,
        "amount": "$0.47",
        "property_type": "Single room",
        "bedroom": 1,
        "bathroom": 1,
        "region": "Accra",
        "location": "Dome",
        "bookmark": 1,
        "favorite": 1,
        "image1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLdVNNTxphEH5YVhZFRCCNmB6UYmgIRSJJD6QcS0QTT7145NT/4KUXY4yJHjzzB/gDJl68NE0IJCbaA+GzJBQBQ1RU1ALLbmfeAqmJTjJ5331n5pl5Zmah6zpYSQw+n+/z4eFhxuv1xuhb5rehyqFQKJJIJFLsw2+jOHEpGwx6i72OjvB2ZQW/T0+hbWzgDf4J25TjY7iWl9E4O0NvfV3YPLpukAwk7GRRFFhsNgwGA0zb7Zg0GmGXJKFmcjFbrcI2OTMD8xCYY6XhHWZZRq5cFk75YhEagXRmZ9GZnsbAbEYunxe2XKEwBsCIYwnQbJT95/w8ip0Olii7m6hJFKD3++iqKn7RWSZ9p2kI0flI9iVAkv+v4IPTCb/FAr3Xg0pOGiuBmQjo/cQEvHQaSJX7ezwS6LiKdDqtq6r6qvb7ff3p6UkoC79xDMfKeEG63S6y2Sw8Hg9KpZLgfnt7i9XV1dHIxyK9BMDBtVoNVup8MBiE2+3G1NQUKPNYR0DPKuBHzn59fY08df3m5gZXV1dYXFwUQLRkcDgcwm6nKYXDYcszAOKKZDKJh4cHxONxcXIlqVQKzWYTG7RcMjW70WjglJbN6XR+ewbAjpVKBV82N7G3tyf4u1wuBAIB1Ot17O/vCyBaa0SjUVSr1a+SPiRDh3Z+fg4LjZFle3tbVLRJYJFIBGtra4jFYujRiLe2toQP7Y4iKrinuXZIKJs1k8mI1T44OBDd50pGoEyJ8+3u7ooKLi4u/ggAbpjRaJxhfu12G99PTuD3+0Xpl5eXKND6KvSvLCwsYG5uDhptIyViWk3xN+7s7PygkX3i+93dHZgKNQgmk0lknqV/gu+tVktUwDTortI0Pv4FgnWCE6f7EysAAAAASUVORK5CYII=",
        "image2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI+SURBVDjLtZPPaxNBFMcX+leoIB4VFFQEcXtIMXpILbQhYprUmGyym2SbX00aSSCGWrfLhmSTTQI9tDGBtlgIIqVFBNec7NGLaJGCvczBQKG5eGi8fZ1dbVHagiIOfHkzj3mf951hhgHA/IuY/wYoFgsuWZa+/DWgVCoO0GJJUeR9SZrFcUVETPGEi5w2AZVKma1UVFOqWmJp8edms4G1tReYmXl0BEBCU7k9MQbiDLwzAeVyCfV6DbWahmpVw8rKEtrtNpaXl5DNPPwNQIIJgTwIX+y6A+hNcCC3HRFquYDNzbfodDrQdR2tVguSJFFgDalk/BBA+Di/J0RA7vqyZMQV7zncIIN3thl6VqyuPoOiKJBlGfl8HqlUis7nEIuJJmB3zL1D3IJ110W7DjvNHGGHQa5awRgX1WgsQBAEeL1eOBwO2Gw2iGKIKngA6BG7x0ojyNDoD8DlmyAXBsHkclksLi4gm80gkYjDbh+DxWKhMA9CocDhEWr58Y10dRzByijuPxn61nSxIOeubTPpdBLT0wlaHDEtR6OiCeE4L3XFmYCwZn88+5zDy615vO/q0N5Mwqldgv/e2Q6TnIqykckwGw7zbDDoZwXBt2OAMpkUeN5nAjzKrf76xyrWP9WNNdSOAK0TwvXIqf6RR0K7DvABn0y1fwAYyV3Bq62n+HVsfJg3ACc/UQqaoOoa8xvRM/2S7oeim0Aor30nOzhOdOOcQz2Pss6bnY1orGle/eNfRzcXqL4atn/GgpH/DtOZnBuaeVfLAAAAAElFTkSuQmCC",
        "image3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADMSURBVDjLY/z//z8DJYCJgUKAYUBE+440IHYh1gAWLGIzgXgPFINBVFTU/1+/fjH8/v2bAUSD8N69exlBcozIYQCyHUgZAzGIdl1R6bGHVBeEAjW5Qr1QDnOFj4/Pf5jNMHzmzBlUFwA1hQIpkMZ7QKxErCtYoJqVoDaGATXcg/JBBnQAsYmdnR2GC27duoUZBuQAeBhERkZi2IKOYbEAop8/f05lF3h7e/8nZDsy/vz5M5VdYGtr+//nz59Y/QvDf/78QcbUcQHFuREAOJ3Rs6CmnfsAAAAASUVORK5CYII=",
        "image4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALASURBVDjLdZPLS1tBFMaDf4D7LLqviy66aulSsnBRaDWLSqFgmvRBUhG7UDQoJBpiSGpKTQrRIIqvYBRMKJHeRuMzPq/GNAbFx8JHLwoKLZau7v16zlDTBuzAMAx3vt/5zjdzdQB0N821tTXz0tJSamFhIUXD/L9zRZutra2yjY2NUhKXkPj89PQUJycnGBsbO08kEiXxeLx0fHy87EYAiXtIrK6urirpdFo/NzenHB4e4uDgACRUYrGYnkDKyMiIOjAw0FMEyGQy9v39fVxcXGBvbw8kvpqentby+TxyuRwmJiY0El+RMyiKgsnJSXi9XnsBQFVbqFeNISzY3d0VoGsA77PZLBiwvLyMpqYmrb6+vqWohcXFRRcfXl9fx8rKCiRJQjgcRn9/PzsCtYXZ2VlR3ePxuAotEFGm6sczMzOXOzs7kGUZyWQSTqcz3djYaGhtbTX4/f70/Py8APF3n8936Xa7j9va2mQdidWzszNhlytTkBgaGkJ7e7vhukp3d7eBMgCdFc7YDYdrs9lUHd2xenR0JHrkD1yBEkdXV1cBEAwGDZFIRDjgFsitOG8ymVQdXYlMFo/7+vouNzc3BYRz6O3tTYdCIUMgEBAthKKdePvxGV52PsJTZ7n2+HX5d6PRKBdCJIsuClIExSs9JIyOjoLuHYGIB46oCZ9yQWS+SfB/seKJ/w7u2fQ+IY5Goy3Dw8Pa9va2EPN10cMSmTCoxlOB2Nf3iOU/gIcv+QL+5CsG/BKAwcFBOyfPL49AoHSvXC6XxqFx3w/td5HIhfHviGeDDPj7ph0OR09dXZ1qsViUhoYGPUEUdsIOHry5pXml53BLNULs/lxT7OB6EqDMarWWNjc3lxDwfGpqiv8DVFju/zT6buOdZBGVeeV9IYObZm1trbm6ujpVWVmZqqqqMtPhDpo/2PaftYPP/QZledsx50IwXwAAAABJRU5ErkJggg==",
        "image5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIWSURBVDjLjZNPSBRRHMf32rVTdFOsDkJEhODNLGqXukgJpmiEURBGdEnbskNktrhCRQuaLEEikUhlbK5EiZmxjbWwfxvL0dHdtdlCx3VtZxyaed/eG5qwZct98DnM4/f9vN/M+40NgK1Y5p7tPTY9UIeZ4Q6EvIcQ9pQ3FR1O+kvqpbFWZCI+YG0RK5EhBNz2dFHhxIvSWjl+TdOSzyGNd0GJPoE+P4nogzPqpuGUv8wux64ahjIJZbYFy1Pnwfc3I9LXuDR1t2bnf8PC0xKHHL0MQw0gJ5yEmmhA9pMTYm9VOth9cA+rsdV1jm6lDFA0Cizabl6H9KH1d7gJ6kI9VmNXIHiqs5/dFfusQ5hg+PGbL/ipG7CWxPvAv7wEQ5mAKjZjPdGIDO2E9xwmgS7Hjo1dMoFuEIKMQvAtS8C9eoT4iBNh/22kuFrkxAYsh9ow661Bp9fHuqv4S9DiGTdPTa8SfM0QDLoOANl5TN8/jjHndrzrceCt2w71uwDXYJAJjhQULNJwQia4cXY3tMA9aNwdcB37MXRuF4Ih3qwpKLBegbUvLhGcqN6GW6fK8dp1FBP9F/AxvoBwSjcF7Q/fM0FlvsD8iEyycbFuQknDFLPl40QWnqFsyRdY16hbV+gdjf8Rraytm890P0opy5+VggNECwVJzllBldL+r2ErFO7uHYmx4A/Kxc1GPT9cSpmjnC72L/0FRS76cD+dhSEAAAAASUVORK5CYII="
    }]

    const { title, openSidebar, token } = useContext(UserContext);
    const [listings, setListings] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [showTag, setShowTag] = useState(true);
    const [favorite, setFavorite] = useState(true);
    const [bookmark, setBookmark] = useState([]);
    const [action, setAction] = useState(false)

    const authAxios = Axios.create({
        baseURL: apilink,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": 'multipart/form-data'
        },
    });


    const getListings = () => {
        // const newlisting = [...dumylisting].map((listing) => listing.favorite === 1 ? { ...listing, favorite} : listing)

        // setLoading(true);
        // authAxios.get(`/api/user/listings`)
        //     .then((res) => {
        //         setLoading(false);
        //         setListings(res.data.data);
        //         console.log(res.data.data);
        //         setBookmark(res.data.data.bookmark);
        //         console.log(res.data.data.bookmark.action);
        //         setAction(res.data.data.bookmark.action)
        //         action === 1 ? setFavorite(true) : setFavorite(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };
    useEffect(() => {
        // getListings();
        setListings(dumylisting)
    }, []);


    return (
        <Box
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: !openSidebar ? "85%" : "100%",
                    lg: !openSidebar ? "85%" : "100%",
                },
                height: "auto",
                margin: {
                    md: "auto",
                    lg: "auto"
                },
                padding: "10px 25px",
            }}>
            <Box sx={{
                width: "100%",
                height: "auto",
            }}>
                <Typography variant="body1"
                    sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                    }}>
                    Saved Listings {title}
                </Typography>
            </Box>
            <Box mt={2} sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "80%",
                },
                height: "auto",

            }}>
                <Grid container columnSpacing={1} rowSpacing={1}>
                    {listings.map((data) => (
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <FavListingCard
                                key={data.id}
                                id={data.id}
                                image={data.image1}
                                image1={data.image2}
                                image2={data.image3}
                                image3={data.image4}
                                image4={data.image5}
                                favorite={favorite}
                                showTag={showTag}
                                amount={data.amount}
                                property_type={data.property_type}
                                number_of_bathrooms={data.bedroom}
                                number_of_bedrooms={data.bathroom}
                                location={data.location}
                                region={data.region}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>
            <Outlet />
        </Box>
    )
}

export default FavoriteListings
