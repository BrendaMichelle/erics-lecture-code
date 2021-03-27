class ToysController < ApplicationController

    def index
        @toys = Toy.all
        render json: @toys
    end

    def show
        @toy = Toy.find(params[:id])
        render json: @toy
    end


    def create
        @toy = Toy.create(toy_params)
        render json: @toy 
    end


    def update
        @toy = Toy.find(params[:id])
        @toy.update(toy_params)
        render json: @toy
    end


    def destroy
        @toy = Toy.find(params[:id])
        @toy.destroy
        render json: @toy
    end


    def count
        render json: {count: Toy.count}
    end

    def sum
        total = params[:arrayOfNums].sum
        render json: {"here is your sum": total}
    end



    private


    def toy_params
        # params.require(:toy).permit(:name, :image, :likes)
        params.permit(:name, :image, :likes)
    end

end
